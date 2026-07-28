"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["873101"],{671494(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>j,frontMatter:()=>l,contentTitle:()=>u,toc:()=>x,assets:()=>h});var n=JSON.parse('{"id":"services/cloudfront/distributions/index","title":"distributions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/cloudfront/distributions/index.md","sourceDirName":"services/cloudfront/distributions","slug":"/services/cloudfront/distributions/","permalink":"/services/cloudfront/distributions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"distributions","hide_title":false,"hide_table_of_contents":false,"keywords":["distributions","cloudfront","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"distribution_tenants_by_customizations","permalink":"/services/cloudfront/distribution_tenants_by_customizations/"},"next":{"title":"distributions_by_anycast_ip_list_ids","permalink":"/services/cloudfront/distributions_by_anycast_ip_list_ids/"}}'),r=t(474848),s=t(28453),d=t(97362),o=t(897272),a=t(413554),c=t(541647);let l={title:"distributions",hide_title:!1,hide_table_of_contents:!1,keywords:["distributions","cloudfront","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function g(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"distributions"})," resource."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"distributions"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"aws.cloudfront.distributions"})})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(i.p,{children:["The following fields are returned by ",(0,r.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"get_distribution",values:[{label:"get_distribution",value:"get_distribution"},{label:"list_distributions",value:"list_distributions"}],children:[(0,r.jsx)(c.A,{value:"get_distribution",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"ARN"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The distribution's Amazon Resource Name (ARN)."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"ActiveTrustedKeyGroups"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"This field contains a list of key groups and the public keys in each key group that CloudFront can use to verify the signatures of signed URLs or signed cookies."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"ActiveTrustedSigners"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"We recommend using TrustedKeyGroups instead of TrustedSigners. This field contains a list of Amazon Web Services account IDs and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs or signed cookies."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"AliasICPRecordals"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. For more information about ICP recordals, see Signup, Accounts, and Credentials in Getting Started with Amazon Web Services services in China."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"DistributionConfig"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The distribution's configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"DomainName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The distribution's CloudFront domain name. For example: d111111abcdef8.cloudfront.net."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The distribution's identifier. For example: E1U5RQF7T870K0."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"InProgressInvalidationBatches"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The number of invalidation batches currently in progress."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"LastModifiedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The date and time when the distribution was last modified."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The distribution's status. When the status is Deployed, the distribution's information is fully propagated to all CloudFront edge locations."})]})]})]})}),(0,r.jsx)(c.A,{value:"list_distributions",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"IsTruncated"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)("td",{children:"A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Items"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A complex type that contains one DistributionSummary element for each distribution that was created by the current Amazon Web Services account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Marker"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The value you provided for the Marker request parameter."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"MaxItems"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The value you provided for the MaxItems request parameter."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"NextMarker"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Quantity"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The number of distributions that were created by the current Amazon Web Services account."})]})]})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#get_distribution",children:(0,r.jsx)(d.A,{code:"get_distribution"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Get the information about a distribution."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_distributions",children:(0,r.jsx)(d.A,{code:"list_distributions"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-Marker",children:(0,r.jsx)("code",{children:"Marker"})}),", ",(0,r.jsx)("a",{href:"#parameter-MaxItems",children:(0,r.jsx)("code",{children:"MaxItems"})})]}),(0,r.jsx)("td",{children:"List CloudFront distributions."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_distribution",children:(0,r.jsx)(d.A,{code:"create_distribution"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-DistributionConfig",children:(0,r.jsx)("code",{children:"DistributionConfig"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a CloudFront distribution."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#associate_distribution_web_acl",children:(0,r.jsx)(d.A,{code:"associate_distribution_web_acl"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-WebACLArn",children:(0,r.jsx)("code",{children:"WebACLArn"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-If-Match",children:(0,r.jsx)("code",{children:"If-Match"})})}),(0,r.jsx)("td",{children:"Associates the WAF web ACL with a distribution."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_distribution",children:(0,r.jsx)(d.A,{code:"update_distribution"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-DistributionConfig",children:(0,r.jsx)("code",{children:"DistributionConfig"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-If-Match",children:(0,r.jsx)("code",{children:"If-Match"})})}),(0,r.jsx)("td",{children:"Updates the configuration for a CloudFront distribution. The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an UpdateDistribution request to make the updates. To update a web distribution using the CloudFront API Use GetDistributionConfig to get the current configuration, including the version identifier (ETag). Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions: You must copy the ETag field value from the response. (You'll use it for the IfMatch parameter in your request.) Then, remove the ETag field from the distribution configuration. You can't change the value of CallerReference. Submit an UpdateDistribution request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an UpdateDistribution request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#disassociate_distribution_web_acl",children:(0,r.jsx)(d.A,{code:"disassociate_distribution_web_acl"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-If-Match",children:(0,r.jsx)("code",{children:"If-Match"})})}),(0,r.jsx)("td",{children:"Disassociates a distribution from the WAF web ACL."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_distribution",children:(0,r.jsx)(d.A,{code:"delete_distribution"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-If-Match",children:(0,r.jsx)("code",{children:"If-Match"})})}),(0,r.jsx)("td",{children:"Delete a distribution. Before you can delete a distribution, you must disable it, which requires permission to update the distribution. Once deleted, a distribution cannot be recovered."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_distribution_with_staging_config",children:(0,r.jsx)(d.A,{code:"update_distribution_with_staging_config"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-StagingDistributionId",children:(0,r.jsx)("code",{children:"StagingDistributionId"})}),", ",(0,r.jsx)("a",{href:"#parameter-If-Match",children:(0,r.jsx)("code",{children:"If-Match"})})]}),(0,r.jsx)("td",{children:"Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its Aliases (also known as alternate domain names or CNAMEs) and ContinuousDeploymentPolicyId value, but otherwise its configuration is overwritten to match the staging distribution. You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution. This API operation requires the following IAM permissions: GetDistribution UpdateDistribution"})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,r.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The identifier of the primary distribution to which you are copying a staging distribution's configuration."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-If-Match",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"If-Match"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The current versions (ETag values) of both primary and staging distributions. Provide these in the following format: <primary ETag>, <staging ETag>"})]}),(0,r.jsxs)("tr",{id:"parameter-Marker",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Marker"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last distribution on that page)."})]}),(0,r.jsxs)("tr",{id:"parameter-MaxItems",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"MaxItems"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The maximum number of distributions you want in the response body."})]}),(0,r.jsxs)("tr",{id:"parameter-StagingDistributionId",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"StagingDistributionId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The identifier of the staging distribution whose configuration you are copying to the primary distribution."})]})]})]}),"\n",(0,r.jsxs)(i.h2,{id:"select-examples",children:[(0,r.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"get_distribution",values:[{label:"get_distribution",value:"get_distribution"},{label:"list_distributions",value:"list_distributions"}],children:[(0,r.jsxs)(c.A,{value:"get_distribution",children:[(0,r.jsx)(i.p,{children:"Get the information about a distribution."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"SELECT\nARN,\nActiveTrustedKeyGroups,\nActiveTrustedSigners,\nAliasICPRecordals,\nDistributionConfig,\nDomainName,\nId,\nInProgressInvalidationBatches,\nLastModifiedTime,\nStatus\nFROM aws.cloudfront.distributions\nWHERE id = '{{ id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(c.A,{value:"list_distributions",children:[(0,r.jsx)(i.p,{children:"List CloudFront distributions."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"SELECT\nIsTruncated,\nItems,\nMarker,\nMaxItems,\nNextMarker,\nQuantity\nFROM aws.cloudfront.distributions\nWHERE region = '{{ region }}' -- required\nAND Marker = '{{ Marker }}'\nAND MaxItems = '{{ MaxItems }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(i.h2,{id:"insert-examples",children:[(0,r.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"create_distribution",values:[{label:"create_distribution",value:"create_distribution"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"create_distribution",children:[(0,r.jsx)(i.p,{children:"Creates a CloudFront distribution."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.cloudfront.distributions (\nDistributionConfig,\nregion\n)\nSELECT \n'{{ DistributionConfig }}' /* required */,\n'{{ region }}'\nRETURNING\nARN,\nActiveTrustedKeyGroups,\nActiveTrustedSigners,\nAliasICPRecordals,\nDistributionConfig,\nDomainName,\nId,\nInProgressInvalidationBatches,\nLastModifiedTime,\nStatus\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: distributions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the distributions resource.
  - name: DistributionConfig
    description: |
      A distribution configuration.
    value:
      CallerReference: "{{ CallerReference }}"
      Aliases:
        Quantity: {{ Quantity }}
        Items:
          - "{{ Items }}"
      DefaultRootObject: "{{ DefaultRootObject }}"
      Origins:
        Quantity: {{ Quantity }}
        Items:
          - Id: "{{ Id }}"
            DomainName: "{{ DomainName }}"
            OriginPath: "{{ OriginPath }}"
            CustomHeaders:
              Quantity: {{ Quantity }}
              Items:
                - HeaderName: "{{ HeaderName }}"
                  HeaderValue: "{{ HeaderValue }}"
            S3OriginConfig:
              OriginAccessIdentity: "{{ OriginAccessIdentity }}"
              OriginReadTimeout: {{ OriginReadTimeout }}
            CustomOriginConfig:
              HTTPPort: {{ HTTPPort }}
              HTTPSPort: {{ HTTPSPort }}
              OriginProtocolPolicy: "{{ OriginProtocolPolicy }}"
              OriginSslProtocols:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              OriginReadTimeout: {{ OriginReadTimeout }}
              OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
              IpAddressType: "{{ IpAddressType }}"
              OriginMtlsConfig:
                ClientCertificateArn: "{{ ClientCertificateArn }}"
            VpcOriginConfig:
              VpcOriginId: "{{ VpcOriginId }}"
              OwnerAccountId: "{{ OwnerAccountId }}"
              OriginReadTimeout: {{ OriginReadTimeout }}
              OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
            ConnectionAttempts: {{ ConnectionAttempts }}
            ConnectionTimeout: {{ ConnectionTimeout }}
            ResponseCompletionTimeout: {{ ResponseCompletionTimeout }}
            OriginShield:
              Enabled: {{ Enabled }}
              OriginShieldRegion: "{{ OriginShieldRegion }}"
            OriginAccessControlId: "{{ OriginAccessControlId }}"
      OriginGroups:
        Quantity: {{ Quantity }}
        Items:
          - Id: "{{ Id }}"
            FailoverCriteria:
              StatusCodes:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
            Members:
              Quantity: {{ Quantity }}
              Items:
                - OriginId: "{{ OriginId }}"
            SelectionCriteria: "{{ SelectionCriteria }}"
      DefaultCacheBehavior:
        TargetOriginId: "{{ TargetOriginId }}"
        TrustedSigners:
          Enabled: {{ Enabled }}
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        TrustedKeyGroups:
          Enabled: {{ Enabled }}
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
        AllowedMethods:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
          CachedMethods:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
        SmoothStreaming: {{ SmoothStreaming }}
        Compress: {{ Compress }}
        LambdaFunctionAssociations:
          Quantity: {{ Quantity }}
          Items:
            - LambdaFunctionARN: "{{ LambdaFunctionARN }}"
              EventType: "{{ EventType }}"
              IncludeBody: {{ IncludeBody }}
        FunctionAssociations:
          Quantity: {{ Quantity }}
          Items:
            - FunctionARN: "{{ FunctionARN }}"
              EventType: "{{ EventType }}"
        FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
        RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
        CachePolicyId: "{{ CachePolicyId }}"
        OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
        ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
        GrpcConfig:
          Enabled: {{ Enabled }}
        ForwardedValues:
          QueryString: {{ QueryString }}
          Cookies:
            Forward: "{{ Forward }}"
            WhitelistedNames:
              Quantity: {{ Quantity }}
              Items: "{{ Items }}"
          Headers:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
          QueryStringCacheKeys:
            Quantity: {{ Quantity }}
            Items:
              - "{{ Items }}"
        MinTTL: {{ MinTTL }}
        DefaultTTL: {{ DefaultTTL }}
        MaxTTL: {{ MaxTTL }}
      CacheBehaviors:
        Quantity: {{ Quantity }}
        Items:
          - PathPattern: "{{ PathPattern }}"
            TargetOriginId: "{{ TargetOriginId }}"
            TrustedSigners:
              Enabled: {{ Enabled }}
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
            TrustedKeyGroups:
              Enabled: {{ Enabled }}
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
            ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
            AllowedMethods:
              Quantity: {{ Quantity }}
              Items:
                - "{{ Items }}"
              CachedMethods:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
            SmoothStreaming: {{ SmoothStreaming }}
            Compress: {{ Compress }}
            LambdaFunctionAssociations:
              Quantity: {{ Quantity }}
              Items:
                - LambdaFunctionARN: "{{ LambdaFunctionARN }}"
                  EventType: "{{ EventType }}"
                  IncludeBody: {{ IncludeBody }}
            FunctionAssociations:
              Quantity: {{ Quantity }}
              Items:
                - FunctionARN: "{{ FunctionARN }}"
                  EventType: "{{ EventType }}"
            FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
            RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
            CachePolicyId: "{{ CachePolicyId }}"
            OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
            ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
            GrpcConfig:
              Enabled: {{ Enabled }}
            ForwardedValues:
              QueryString: {{ QueryString }}
              Cookies:
                Forward: "{{ Forward }}"
                WhitelistedNames: "{{ WhitelistedNames }}"
              Headers:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              QueryStringCacheKeys:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
            MinTTL: {{ MinTTL }}
            DefaultTTL: {{ DefaultTTL }}
            MaxTTL: {{ MaxTTL }}
      CustomErrorResponses:
        Quantity: {{ Quantity }}
        Items:
          - ErrorCode: {{ ErrorCode }}
            ResponsePagePath: "{{ ResponsePagePath }}"
            ResponseCode: "{{ ResponseCode }}"
            ErrorCachingMinTTL: {{ ErrorCachingMinTTL }}
      Comment: "{{ Comment }}"
      Logging:
        Enabled: {{ Enabled }}
        IncludeCookies: {{ IncludeCookies }}
        Bucket: "{{ Bucket }}"
        Prefix: "{{ Prefix }}"
      PriceClass: "{{ PriceClass }}"
      Enabled: {{ Enabled }}
      ViewerCertificate:
        CloudFrontDefaultCertificate: {{ CloudFrontDefaultCertificate }}
        IAMCertificateId: "{{ IAMCertificateId }}"
        ACMCertificateArn: "{{ ACMCertificateArn }}"
        SSLSupportMethod: "{{ SSLSupportMethod }}"
        MinimumProtocolVersion: "{{ MinimumProtocolVersion }}"
        Certificate: "{{ Certificate }}"
        CertificateSource: "{{ CertificateSource }}"
      Restrictions:
        GeoRestriction:
          RestrictionType: "{{ RestrictionType }}"
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
      WebACLId: "{{ WebACLId }}"
      HttpVersion: "{{ HttpVersion }}"
      IsIPV6Enabled: {{ IsIPV6Enabled }}
      ContinuousDeploymentPolicyId: "{{ ContinuousDeploymentPolicyId }}"
      Staging: {{ Staging }}
      AnycastIpListId: "{{ AnycastIpListId }}"
      TenantConfig:
        ParameterDefinitions:
          - Name: "{{ Name }}"
            Definition:
              StringSchema:
                Comment: "{{ Comment }}"
                DefaultValue: "{{ DefaultValue }}"
                Required: {{ Required }}
      ConnectionMode: "{{ ConnectionMode }}"
      ViewerMtlsConfig:
        Mode: "{{ Mode }}"
        TrustStoreConfig:
          TrustStoreId: "{{ TrustStoreId }}"
          AdvertiseTrustStoreCaNames: {{ AdvertiseTrustStoreCaNames }}
          IgnoreCertificateExpiry: {{ IgnoreCertificateExpiry }}
      ConnectionFunctionAssociation:
        Id: "{{ Id }}"
      CacheTagConfig:
        HeaderName: "{{ HeaderName }}"
`})})]}),"\n",(0,r.jsxs)(i.h2,{id:"update-examples",children:[(0,r.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"associate_distribution_web_acl",values:[{label:"associate_distribution_web_acl",value:"associate_distribution_web_acl"},{label:"update_distribution",value:"update_distribution"},{label:"disassociate_distribution_web_acl",value:"disassociate_distribution_web_acl"}],children:[(0,r.jsxs)(c.A,{value:"associate_distribution_web_acl",children:[(0,r.jsx)(i.p,{children:"Associates the WAF web ACL with a distribution."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.cloudfront.distributions\nSET \nWebACLArn = '{{ WebACLArn }}'\nWHERE \nid = '{{ id }}' --required\nAND region = '{{ region }}' --required\nAND WebACLArn = '{{ WebACLArn }}' --required\nAND `If-Match` = '{{ If-Match}}'\nRETURNING\nETag,\nId,\nWebACLArn;\n"})})]}),(0,r.jsxs)(c.A,{value:"update_distribution",children:[(0,r.jsx)(i.p,{children:"Updates the configuration for a CloudFront distribution. The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an UpdateDistribution request to make the updates. To update a web distribution using the CloudFront API Use GetDistributionConfig to get the current configuration, including the version identifier (ETag). Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions: You must copy the ETag field value from the response. (You'll use it for the IfMatch parameter in your request.) Then, remove the ETag field from the distribution configuration. You can't change the value of CallerReference. Submit an UpdateDistribution request, providing the updated distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an UpdateDistribution request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.cloudfront.distributions\nSET \nDistributionConfig = '{{ DistributionConfig }}'\nWHERE \nid = '{{ id }}' --required\nAND region = '{{ region }}' --required\nAND DistributionConfig = '{{ DistributionConfig }}' --required\nAND `If-Match` = '{{ If-Match}}'\nRETURNING\nARN,\nActiveTrustedKeyGroups,\nActiveTrustedSigners,\nAliasICPRecordals,\nDistributionConfig,\nDomainName,\nId,\nInProgressInvalidationBatches,\nLastModifiedTime,\nStatus;\n"})})]}),(0,r.jsxs)(c.A,{value:"disassociate_distribution_web_acl",children:[(0,r.jsx)(i.p,{children:"Disassociates a distribution from the WAF web ACL."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.cloudfront.distributions\nSET \n-- No updatable properties\nWHERE \nid = '{{ id }}' --required\nAND region = '{{ region }}' --required\nAND `If-Match` = '{{ If-Match}}'\nRETURNING\nETag,\nId;\n"})})]})]}),"\n",(0,r.jsxs)(i.h2,{id:"delete-examples",children:[(0,r.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(a.A,{defaultValue:"delete_distribution",values:[{label:"delete_distribution",value:"delete_distribution"}],children:(0,r.jsxs)(c.A,{value:"delete_distribution",children:[(0,r.jsx)(i.p,{children:"Delete a distribution. Before you can delete a distribution, you must disable it, which requires permission to update the distribution. Once deleted, a distribution cannot be recovered."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.cloudfront.distributions\nWHERE id = '{{ id }}' --required\nAND region = '{{ region }}' --required\nAND `If-Match` = '{{ If-Match }}'\n;\n"})})]})}),"\n",(0,r.jsx)(i.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,r.jsx)(a.A,{defaultValue:"update_distribution_with_staging_config",values:[{label:"update_distribution_with_staging_config",value:"update_distribution_with_staging_config"}],children:(0,r.jsxs)(c.A,{value:"update_distribution_with_staging_config",children:[(0,r.jsx)(i.p,{children:"Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its Aliases (also known as alternate domain names or CNAMEs) and ContinuousDeploymentPolicyId value, but otherwise its configuration is overwritten to match the staging distribution. You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution. This API operation requires the following IAM permissions: GetDistribution UpdateDistribution"}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"EXEC aws.cloudfront.distributions.update_distribution_with_staging_config \n@id='{{ id }}' --required, \n@region='{{ region }}' --required, \n@StagingDistributionId='{{ StagingDistributionId }}', \n@If-Match='{{ If-Match }}'\n;\n"})})]})})]})}function j(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);