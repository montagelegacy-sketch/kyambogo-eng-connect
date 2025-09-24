import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">KYUES Blog</h1>
          <p className="text-xl">Latest news, insights, and stories from our community</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Future of Engineering Education", author: "Dr. Sarah Namukasa", date: "March 1, 2024" },
              { title: "Student Innovation Spotlight", author: "KYUES Editorial", date: "February 28, 2024" },
              { title: "Industry Partnership Success", author: "Prof. James Katusiimeh", date: "February 25, 2024" }
            ].map((post, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-dark">{post.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">By {post.author}</p>
                  <p className="text-kyues-red text-sm">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Read the full article...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;