"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["601538"],{895281(e,r,t){t.r(r),t.d(r,{metadata:()=>s,default:()=>j,frontMatter:()=>o,contentTitle:()=>l,toc:()=>x,assets:()=>u});var s=JSON.parse('{"id":"services/appmesh/routes/index","title":"routes","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/appmesh/routes/index.md","sourceDirName":"services/appmesh/routes","slug":"/services/appmesh/routes/","permalink":"/services/appmesh/routes/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"routes","hide_title":false,"hide_table_of_contents":false,"keywords":["routes","appmesh","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"meshes","permalink":"/services/appmesh/meshes/"},"next":{"title":"tags","permalink":"/services/appmesh/tags/"}}'),n=t(474848),i=t(28453),a=t(97362),d=t(897272),c=t(413554),h=t(541647);let o={title:"routes",hide_title:!1,hide_table_of_contents:!1,keywords:["routes","appmesh","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},l,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"routes"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"routes"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"aws.appmesh.routes"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"describe_route",values:[{label:"describe_route",value:"describe_route"},{label:"list_routes",value:"list_routes"}],children:[(0,n.jsx)(h.A,{value:"describe_route",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh that the route resides in."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"metadata"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"An object that represents metadata for a resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"routeName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the route."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"spec"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"An object that represents a route specification. Specify one route type."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The status of the route."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtualRouterName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The virtual router that the route is associated with."})]})]})]})}),(0,n.jsx)(h.A,{value:"list_routes",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The full Amazon Resource Name (ARN) for the route."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"createdAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The Unix epoch timestamp in seconds for when the resource was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"lastUpdatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The Unix epoch timestamp in seconds for when the resource was last updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh that the route resides in."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"resourceOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"routeName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the route."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"version"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer (int64)"})}),(0,n.jsx)("td",{children:"The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtualRouterName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The virtual router that the route is associated with."})]})]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_route",children:(0,n.jsx)(a.A,{code:"describe_route"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-route_name",children:(0,n.jsx)("code",{children:"route_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_router_name",children:(0,n.jsx)("code",{children:"virtual_router_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Describes an existing route."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_routes",children:(0,n.jsx)(a.A,{code:"list_routes"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_router_name",children:(0,n.jsx)("code",{children:"virtual_router_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-limit",children:(0,n.jsx)("code",{children:"limit"})}),", ",(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})}),", ",(0,n.jsx)("a",{href:"#parameter-nextToken",children:(0,n.jsx)("code",{children:"nextToken"})})]}),(0,n.jsx)("td",{children:"Returns a list of existing routes in a service mesh."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_route",children:(0,n.jsx)(a.A,{code:"create_route"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_router_name",children:(0,n.jsx)("code",{children:"virtual_router_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-routeName",children:(0,n.jsx)("code",{children:"routeName"})}),", ",(0,n.jsx)("a",{href:"#parameter-spec",children:(0,n.jsx)("code",{children:"spec"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Creates a route that is associated with a virtual router. You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes. For more information about routes, see Routes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_route",children:(0,n.jsx)(a.A,{code:"update_route"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-route_name",children:(0,n.jsx)("code",{children:"route_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_router_name",children:(0,n.jsx)("code",{children:"virtual_router_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-spec",children:(0,n.jsx)("code",{children:"spec"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Updates an existing route for a specified service mesh and virtual router."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_route",children:(0,n.jsx)(a.A,{code:"delete_route"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-route_name",children:(0,n.jsx)("code",{children:"route_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_router_name",children:(0,n.jsx)("code",{children:"virtual_router_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Deletes an existing route."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-mesh_name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"mesh_name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh to delete the route in."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-route_name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"route_name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the route to delete."})]}),(0,n.jsxs)("tr",{id:"parameter-virtual_router_name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtual_router_name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the virtual router to delete the route in."})]}),(0,n.jsxs)("tr",{id:"parameter-limit",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"limit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The maximum number of results returned by ListRoutes in paginated output. When you use this parameter, ListRoutes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListRoutes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListRoutes returns up to 100 results and a nextToken value if applicable."})]}),(0,n.jsxs)("tr",{id:"parameter-meshOwner",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{id:"parameter-nextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"nextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The nextToken value returned from a previous paginated ListRoutes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value."})]})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"describe_route",values:[{label:"describe_route",value:"describe_route"},{label:"list_routes",value:"list_routes"}],children:[(0,n.jsxs)(h.A,{value:"describe_route",children:[(0,n.jsx)(r.p,{children:"Describes an existing route."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nmeshName,\nmetadata,\nrouteName,\nspec,\nstatus,\nvirtualRouterName\nFROM aws.appmesh.routes\nWHERE mesh_name = '{{ mesh_name }}' -- required\nAND route_name = '{{ route_name }}' -- required\nAND virtual_router_name = '{{ virtual_router_name }}' -- required\nAND region = '{{ region }}' -- required\nAND meshOwner = '{{ meshOwner }}'\n;\n"})})]}),(0,n.jsxs)(h.A,{value:"list_routes",children:[(0,n.jsx)(r.p,{children:"Returns a list of existing routes in a service mesh."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\narn,\ncreatedAt,\nlastUpdatedAt,\nmeshName,\nmeshOwner,\nresourceOwner,\nrouteName,\nversion,\nvirtualRouterName\nFROM aws.appmesh.routes\nWHERE mesh_name = '{{ mesh_name }}' -- required\nAND virtual_router_name = '{{ virtual_router_name }}' -- required\nAND region = '{{ region }}' -- required\nAND limit = '{{ limit }}'\nAND meshOwner = '{{ meshOwner }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"create_route",values:[{label:"create_route",value:"create_route"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(h.A,{value:"create_route",children:[(0,n.jsx)(r.p,{children:"Creates a route that is associated with a virtual router. You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes. For more information about routes, see Routes."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.appmesh.routes (\nclientToken,\nrouteName,\nspec,\ntags,\nmesh_name,\nvirtual_router_name,\nregion,\nmeshOwner\n)\nSELECT \n'{{ clientToken }}',\n'{{ routeName }}' /* required */,\n'{{ spec }}' /* required */,\n'{{ tags }}',\n'{{ mesh_name }}',\n'{{ virtual_router_name }}',\n'{{ region }}',\n'{{ meshOwner }}'\nRETURNING\nroute\n;\n"})})]}),(0,n.jsx)(h.A,{value:"manifest",children:(0,n.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: routes
props:
  - name: mesh_name
    value: "{{ mesh_name }}"
    description: Required parameter for the routes resource.
  - name: virtual_router_name
    value: "{{ virtual_router_name }}"
    description: Required parameter for the routes resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the routes resource.
  - name: clientToken
    value: "{{ clientToken }}"
  - name: routeName
    value: "{{ routeName }}"
  - name: spec
    description: |
      An object that represents a route specification. Specify one route type.
    value:
      grpcRoute:
        action:
          weightedTargets:
            - port: {{ port }}
              virtualNode: "{{ virtualNode }}"
              weight: {{ weight }}
        match:
          metadata:
            - invert: {{ invert }}
              match:
                exact: "{{ exact }}"
                prefix: "{{ prefix }}"
                range: "{{ range }}"
                regex: "{{ regex }}"
                suffix: "{{ suffix }}"
              name: "{{ name }}"
          methodName: "{{ methodName }}"
          port: {{ port }}
          serviceName: "{{ serviceName }}"
        retryPolicy:
          grpcRetryEvents:
            - "{{ grpcRetryEvents }}"
          httpRetryEvents:
            - "{{ httpRetryEvents }}"
          maxRetries: {{ maxRetries }}
          perRetryTimeout:
            unit: "{{ unit }}"
            value: {{ value }}
          tcpRetryEvents:
            - "{{ tcpRetryEvents }}"
        timeout:
          idle:
            unit: "{{ unit }}"
            value: {{ value }}
          perRequest:
            unit: "{{ unit }}"
            value: {{ value }}
      http2Route:
        action:
          weightedTargets:
            - port: {{ port }}
              virtualNode: "{{ virtualNode }}"
              weight: {{ weight }}
        match:
          headers:
            - invert: {{ invert }}
              match:
                exact: "{{ exact }}"
                prefix: "{{ prefix }}"
                range: "{{ range }}"
                regex: "{{ regex }}"
                suffix: "{{ suffix }}"
              name: "{{ name }}"
          method: "{{ method }}"
          path:
            exact: "{{ exact }}"
            regex: "{{ regex }}"
          port: {{ port }}
          prefix: "{{ prefix }}"
          queryParameters:
            - match:
                exact: "{{ exact }}"
              name: "{{ name }}"
          scheme: "{{ scheme }}"
        retryPolicy:
          httpRetryEvents:
            - "{{ httpRetryEvents }}"
          maxRetries: {{ maxRetries }}
          perRetryTimeout:
            unit: "{{ unit }}"
            value: {{ value }}
          tcpRetryEvents:
            - "{{ tcpRetryEvents }}"
        timeout:
          idle:
            unit: "{{ unit }}"
            value: {{ value }}
          perRequest:
            unit: "{{ unit }}"
            value: {{ value }}
      httpRoute:
        action:
          weightedTargets:
            - port: {{ port }}
              virtualNode: "{{ virtualNode }}"
              weight: {{ weight }}
        match:
          headers:
            - invert: {{ invert }}
              match:
                exact: "{{ exact }}"
                prefix: "{{ prefix }}"
                range: "{{ range }}"
                regex: "{{ regex }}"
                suffix: "{{ suffix }}"
              name: "{{ name }}"
          method: "{{ method }}"
          path:
            exact: "{{ exact }}"
            regex: "{{ regex }}"
          port: {{ port }}
          prefix: "{{ prefix }}"
          queryParameters:
            - match:
                exact: "{{ exact }}"
              name: "{{ name }}"
          scheme: "{{ scheme }}"
        retryPolicy:
          httpRetryEvents:
            - "{{ httpRetryEvents }}"
          maxRetries: {{ maxRetries }}
          perRetryTimeout:
            unit: "{{ unit }}"
            value: {{ value }}
          tcpRetryEvents:
            - "{{ tcpRetryEvents }}"
        timeout:
          idle:
            unit: "{{ unit }}"
            value: {{ value }}
          perRequest:
            unit: "{{ unit }}"
            value: {{ value }}
      priority: {{ priority }}
      tcpRoute:
        action:
          weightedTargets:
            - port: {{ port }}
              virtualNode: "{{ virtualNode }}"
              weight: {{ weight }}
        match:
          port: {{ port }}
        timeout:
          idle:
            unit: "{{ unit }}"
            value: {{ value }}
  - name: tags
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
  - name: meshOwner
    value: "{{ meshOwner }}"
    description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
    description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`})})]}),"\n",(0,n.jsxs)(r.h2,{id:"update-examples",children:[(0,n.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"update_route",values:[{label:"update_route",value:"update_route"}],children:(0,n.jsxs)(h.A,{value:"update_route",children:[(0,n.jsx)(r.p,{children:"Updates an existing route for a specified service mesh and virtual router."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.appmesh.routes\nSET \nclientToken = '{{ clientToken }}',\nspec = '{{ spec }}'\nWHERE \nmesh_name = '{{ mesh_name }}' --required\nAND route_name = '{{ route_name }}' --required\nAND virtual_router_name = '{{ virtual_router_name }}' --required\nAND region = '{{ region }}' --required\nAND spec = '{{ spec }}' --required\nAND meshOwner = '{{ meshOwner}}'\nRETURNING\nroute;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"delete-examples",children:[(0,n.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"delete_route",values:[{label:"delete_route",value:"delete_route"}],children:(0,n.jsxs)(h.A,{value:"delete_route",children:[(0,n.jsx)(r.p,{children:"Deletes an existing route."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.appmesh.routes\nWHERE mesh_name = '{{ mesh_name }}' --required\nAND route_name = '{{ route_name }}' --required\nAND virtual_router_name = '{{ virtual_router_name }}' --required\nAND region = '{{ region }}' --required\nAND meshOwner = '{{ meshOwner }}'\n;\n"})})]})})]})}function j(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);