"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["641910"],{159834(e,r,s){s.r(r),s.d(r,{metadata:()=>t,default:()=>v,frontMatter:()=>c,contentTitle:()=>h,toc:()=>m,assets:()=>u});var t=JSON.parse('{"id":"services/appmesh/virtual_nodes/index","title":"virtual_nodes","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/appmesh/virtual_nodes/index.md","sourceDirName":"services/appmesh/virtual_nodes","slug":"/services/appmesh/virtual_nodes/","permalink":"/services/appmesh/virtual_nodes/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"virtual_nodes","hide_title":false,"hide_table_of_contents":false,"keywords":["virtual_nodes","appmesh","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"virtual_gateways","permalink":"/services/appmesh/virtual_gateways/"},"next":{"title":"virtual_routers","permalink":"/services/appmesh/virtual_routers/"}}'),n=s(474848),i=s(28453),a=s(97362),d=s(897272),l=s(413554),o=s(541647);let c={title:"virtual_nodes",hide_title:!1,hide_table_of_contents:!1,keywords:["virtual_nodes","appmesh","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"virtual_nodes"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtual_nodes"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"aws.appmesh.virtual_nodes"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_virtual_node",values:[{label:"describe_virtual_node",value:"describe_virtual_node"},{label:"list_virtual_nodes",value:"list_virtual_nodes"}],children:[(0,n.jsx)(o.A,{value:"describe_virtual_node",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh that the virtual node resides in."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"metadata"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"An object that represents metadata for a resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"spec"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"An object that represents the specification of a virtual node."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The current status for the virtual node."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtualNodeName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the virtual node."})]})]})]})}),(0,n.jsx)(o.A,{value:"list_virtual_nodes",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The full Amazon Resource Name (ARN) for the virtual node."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"createdAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The Unix epoch timestamp in seconds for when the resource was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"lastUpdatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The Unix epoch timestamp in seconds for when the resource was last updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh that the virtual node resides in."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"resourceOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"version"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer (int64)"})}),(0,n.jsx)("td",{children:"The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtualNodeName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the virtual node."})]})]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_virtual_node",children:(0,n.jsx)(a.A,{code:"describe_virtual_node"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_node_name",children:(0,n.jsx)("code",{children:"virtual_node_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Describes an existing virtual node."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_virtual_nodes",children:(0,n.jsx)(a.A,{code:"list_virtual_nodes"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-limit",children:(0,n.jsx)("code",{children:"limit"})}),", ",(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})}),", ",(0,n.jsx)("a",{href:"#parameter-nextToken",children:(0,n.jsx)("code",{children:"nextToken"})})]}),(0,n.jsx)("td",{children:"Returns a list of existing virtual nodes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_virtual_node",children:(0,n.jsx)(a.A,{code:"create_virtual_node"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-spec",children:(0,n.jsx)("code",{children:"spec"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtualNodeName",children:(0,n.jsx)("code",{children:"virtualNodeName"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsxs)("td",{children:["Creates a virtual node within a service mesh. A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS). You define a listener for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a backend. The response metadata for your new virtual node contains the arn that is associated with the virtual node. Set this value to the full ARN; for example, arn:aws:appmesh:us-west-2:123456789012",":myMesh","/default/virtualNode/myApp) as the APPMESH_RESOURCE_ARN environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the node.id and node.cluster Envoy parameters. By default, App Mesh uses the name of the resource you specified in APPMESH_RESOURCE_ARN when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the APPMESH_RESOURCE_CLUSTER environment variable with your own name. For more information about virtual nodes, see Virtual nodes. You must be using 1.15.0 or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see Envoy image in the App Mesh User Guide."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_virtual_node",children:(0,n.jsx)(a.A,{code:"update_virtual_node"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_node_name",children:(0,n.jsx)("code",{children:"virtual_node_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-spec",children:(0,n.jsx)("code",{children:"spec"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Updates an existing virtual node in a specified service mesh."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_virtual_node",children:(0,n.jsx)(a.A,{code:"delete_virtual_node"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-mesh_name",children:(0,n.jsx)("code",{children:"mesh_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-virtual_node_name",children:(0,n.jsx)("code",{children:"virtual_node_name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-meshOwner",children:(0,n.jsx)("code",{children:"meshOwner"})})}),(0,n.jsx)("td",{children:"Deletes an existing virtual node. You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-mesh_name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"mesh_name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the service mesh to delete the virtual node in."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-virtual_node_name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"virtual_node_name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the virtual node to delete."})]}),(0,n.jsxs)("tr",{id:"parameter-limit",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"limit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The maximum number of results returned by ListVirtualNodes in paginated output. When you use this parameter, ListVirtualNodes returns only limit results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListVirtualNodes request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListVirtualNodes returns up to 100 results and a nextToken value if applicable."})]}),(0,n.jsxs)("tr",{id:"parameter-meshOwner",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"meshOwner"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with shared meshes."})]}),(0,n.jsxs)("tr",{id:"parameter-nextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"nextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The nextToken value returned from a previous paginated ListVirtualNodes request where limit was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value."})]})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"describe_virtual_node",values:[{label:"describe_virtual_node",value:"describe_virtual_node"},{label:"list_virtual_nodes",value:"list_virtual_nodes"}],children:[(0,n.jsxs)(o.A,{value:"describe_virtual_node",children:[(0,n.jsx)(r.p,{children:"Describes an existing virtual node."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nmeshName,\nmetadata,\nspec,\nstatus,\nvirtualNodeName\nFROM aws.appmesh.virtual_nodes\nWHERE mesh_name = '{{ mesh_name }}' -- required\nAND virtual_node_name = '{{ virtual_node_name }}' -- required\nAND region = '{{ region }}' -- required\nAND meshOwner = '{{ meshOwner }}'\n;\n"})})]}),(0,n.jsxs)(o.A,{value:"list_virtual_nodes",children:[(0,n.jsx)(r.p,{children:"Returns a list of existing virtual nodes."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\narn,\ncreatedAt,\nlastUpdatedAt,\nmeshName,\nmeshOwner,\nresourceOwner,\nversion,\nvirtualNodeName\nFROM aws.appmesh.virtual_nodes\nWHERE mesh_name = '{{ mesh_name }}' -- required\nAND region = '{{ region }}' -- required\nAND limit = '{{ limit }}'\nAND meshOwner = '{{ meshOwner }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_virtual_node",values:[{label:"create_virtual_node",value:"create_virtual_node"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(o.A,{value:"create_virtual_node",children:[(0,n.jsxs)(r.p,{children:["Creates a virtual node within a service mesh. A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS). You define a listener for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a backend. The response metadata for your new virtual node contains the arn that is associated with the virtual node. Set this value to the full ARN; for example, arn:aws:appmesh:us-west-2:123456789012",":myMesh","/default/virtualNode/myApp) as the APPMESH_RESOURCE_ARN environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the node.id and node.cluster Envoy parameters. By default, App Mesh uses the name of the resource you specified in APPMESH_RESOURCE_ARN when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the APPMESH_RESOURCE_CLUSTER environment variable with your own name. For more information about virtual nodes, see Virtual nodes. You must be using 1.15.0 or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see Envoy image in the App Mesh User Guide."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.appmesh.virtual_nodes (\nclientToken,\nspec,\ntags,\nvirtualNodeName,\nmesh_name,\nregion,\nmeshOwner\n)\nSELECT \n'{{ clientToken }}',\n'{{ spec }}' /* required */,\n'{{ tags }}',\n'{{ virtualNodeName }}' /* required */,\n'{{ mesh_name }}',\n'{{ region }}',\n'{{ meshOwner }}'\nRETURNING\nvirtualNode\n;\n"})})]}),(0,n.jsx)(o.A,{value:"manifest",children:(0,n.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: virtual_nodes
props:
  - name: mesh_name
    value: "{{ mesh_name }}"
    description: Required parameter for the virtual_nodes resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the virtual_nodes resource.
  - name: clientToken
    value: "{{ clientToken }}"
  - name: spec
    description: |
      An object that represents the specification of a virtual node.
    value:
      backendDefaults:
        clientPolicy:
          tls:
            certificate:
              file: "{{ file }}"
              sds: "{{ sds }}"
            enforce: {{ enforce }}
            ports:
              - {{ ports }}
            validation:
              subjectAlternativeNames: "{{ subjectAlternativeNames }}"
              trust: "{{ trust }}"
      backends:
        - virtualService:
            clientPolicy:
              tls:
                certificate: "{{ certificate }}"
                enforce: {{ enforce }}
                ports: "{{ ports }}"
                validation: "{{ validation }}"
            virtualServiceName: "{{ virtualServiceName }}"
      listeners:
        - connectionPool:
            grpc:
              maxRequests: {{ maxRequests }}
            http:
              maxConnections: {{ maxConnections }}
              maxPendingRequests: {{ maxPendingRequests }}
            http2:
              maxRequests: {{ maxRequests }}
            tcp:
              maxConnections: {{ maxConnections }}
          healthCheck:
            healthyThreshold: {{ healthyThreshold }}
            intervalMillis: {{ intervalMillis }}
            path: "{{ path }}"
            port: {{ port }}
            protocol: "{{ protocol }}"
            timeoutMillis: {{ timeoutMillis }}
            unhealthyThreshold: {{ unhealthyThreshold }}
          outlierDetection:
            baseEjectionDuration:
              unit: "{{ unit }}"
              value: {{ value }}
            interval:
              unit: "{{ unit }}"
              value: {{ value }}
            maxEjectionPercent: {{ maxEjectionPercent }}
            maxServerErrors: {{ maxServerErrors }}
          portMapping:
            port: {{ port }}
            protocol: "{{ protocol }}"
          timeout:
            grpc:
              idle:
                unit: "{{ unit }}"
                value: {{ value }}
              perRequest:
                unit: "{{ unit }}"
                value: {{ value }}
            http:
              idle:
                unit: "{{ unit }}"
                value: {{ value }}
              perRequest:
                unit: "{{ unit }}"
                value: {{ value }}
            http2:
              idle:
                unit: "{{ unit }}"
                value: {{ value }}
              perRequest:
                unit: "{{ unit }}"
                value: {{ value }}
            tcp:
              idle:
                unit: "{{ unit }}"
                value: {{ value }}
          tls:
            certificate:
              acm:
                certificateArn: "{{ certificateArn }}"
              file:
                certificateChain: "{{ certificateChain }}"
                privateKey: "{{ privateKey }}"
              sds:
                secretName: "{{ secretName }}"
            mode: "{{ mode }}"
            validation:
              subjectAlternativeNames:
                match: "{{ match }}"
              trust:
                file: "{{ file }}"
                sds: "{{ sds }}"
      logging:
        accessLog:
          file:
            format_:
              json: "{{ json }}"
              text: "{{ text }}"
            path: "{{ path }}"
      serviceDiscovery:
        awsCloudMap:
          attributes:
            - key: "{{ key }}"
              value: "{{ value }}"
          ipPreference: "{{ ipPreference }}"
          namespaceName: "{{ namespaceName }}"
          serviceName: "{{ serviceName }}"
        dns:
          hostname: "{{ hostname }}"
          ipPreference: "{{ ipPreference }}"
          responseType: "{{ responseType }}"
  - name: tags
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
  - name: virtualNodeName
    value: "{{ virtualNodeName }}"
  - name: meshOwner
    value: "{{ meshOwner }}"
    description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
    description: The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see Working with shared meshes.
`})})]}),"\n",(0,n.jsxs)(r.h2,{id:"update-examples",children:[(0,n.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"update_virtual_node",values:[{label:"update_virtual_node",value:"update_virtual_node"}],children:(0,n.jsxs)(o.A,{value:"update_virtual_node",children:[(0,n.jsx)(r.p,{children:"Updates an existing virtual node in a specified service mesh."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.appmesh.virtual_nodes\nSET \nclientToken = '{{ clientToken }}',\nspec = '{{ spec }}'\nWHERE \nmesh_name = '{{ mesh_name }}' --required\nAND virtual_node_name = '{{ virtual_node_name }}' --required\nAND region = '{{ region }}' --required\nAND spec = '{{ spec }}' --required\nAND meshOwner = '{{ meshOwner}}'\nRETURNING\nvirtualNode;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"delete-examples",children:[(0,n.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"delete_virtual_node",values:[{label:"delete_virtual_node",value:"delete_virtual_node"}],children:(0,n.jsxs)(o.A,{value:"delete_virtual_node",children:[(0,n.jsx)(r.p,{children:"Deletes an existing virtual node. You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.appmesh.virtual_nodes\nWHERE mesh_name = '{{ mesh_name }}' --required\nAND virtual_node_name = '{{ virtual_node_name }}' --required\nAND region = '{{ region }}' --required\nAND meshOwner = '{{ meshOwner }}'\n;\n"})})]})})]})}function v(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);