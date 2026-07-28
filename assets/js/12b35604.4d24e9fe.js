"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["725027"],{680393(e,i,t){t.r(i),t.d(i,{metadata:()=>r,default:()=>x,frontMatter:()=>c,contentTitle:()=>u,toc:()=>h,assets:()=>g});var r=JSON.parse('{"id":"services/cloudfront/tags/index","title":"tags","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/cloudfront/tags/index.md","sourceDirName":"services/cloudfront/tags","slug":"/services/cloudfront/tags/","permalink":"/services/cloudfront/tags/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"tags","hide_title":false,"hide_table_of_contents":false,"keywords":["tags","cloudfront","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"streaming_distributions","permalink":"/services/cloudfront/streaming_distributions/"},"next":{"title":"trust_stores","permalink":"/services/cloudfront/trust_stores/"}}'),s=t(474848),n=t(28453),o=t(97362),a=t(897272),d=t(413554),l=t(541647);let c={title:"tags",hide_title:!1,hide_table_of_contents:!1,keywords:["tags","cloudfront","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,g={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2}];function m(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"tags"})," resource."]}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"tags"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"aws.cloudfront.tags"})})]})]})}),"\n",(0,s.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.p,{children:["The following fields are returned by ",(0,s.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsx)(d.A,{defaultValue:"list_tags_for_resource",values:[{label:"list_tags_for_resource",value:"list_tags_for_resource"}],children:(0,s.jsx)(l.A,{value:"list_tags_for_resource",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Items"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"A complex type that contains Tag elements."})]})})]})})}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_tags_for_resource",children:(0,s.jsx)(o.A,{code:"list_tags_for_resource"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-Resource",children:(0,s.jsx)("code",{children:"Resource"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"List tags for a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_distribution_with_tags",children:(0,s.jsx)(o.A,{code:"create_distribution_with_tags"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-DistributionConfigWithTags",children:(0,s.jsx)("code",{children:"DistributionConfigWithTags"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Create a new distribution with tags. This API operation requires the following IAM permissions: CreateDistribution TagResource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_streaming_distribution_with_tags",children:(0,s.jsx)(o.A,{code:"create_streaming_distribution_with_tags"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-StreamingDistributionConfigWithTags",children:(0,s.jsx)("code",{children:"StreamingDistributionConfigWithTags"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#untag_resource",children:(0,s.jsx)(o.A,{code:"untag_resource"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-Resource",children:(0,s.jsx)("code",{children:"Resource"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-TagKeys",children:(0,s.jsx)("code",{children:"TagKeys"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Remove tags from a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#tag_resource",children:(0,s.jsx)(o.A,{code:"tag_resource"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-Resource",children:(0,s.jsx)("code",{children:"Resource"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Add tags to a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,s.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{id:"parameter-Resource",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Resource"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"An ARN of a CloudFront resource."})]}),(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,s.jsxs)(i.h2,{id:"select-examples",children:[(0,s.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsx)(d.A,{defaultValue:"list_tags_for_resource",values:[{label:"list_tags_for_resource",value:"list_tags_for_resource"}],children:(0,s.jsxs)(l.A,{value:"list_tags_for_resource",children:[(0,s.jsx)(i.p,{children:"List tags for a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT\nItems\nFROM aws.cloudfront.tags\nWHERE Resource = '{{ Resource }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,s.jsxs)(i.h2,{id:"insert-examples",children:[(0,s.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"create_distribution_with_tags",values:[{label:"create_distribution_with_tags",value:"create_distribution_with_tags"},{label:"create_streaming_distribution_with_tags",value:"create_streaming_distribution_with_tags"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(l.A,{value:"create_distribution_with_tags",children:[(0,s.jsx)(i.p,{children:"Create a new distribution with tags. This API operation requires the following IAM permissions: CreateDistribution TagResource"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.cloudfront.tags (\nDistributionConfigWithTags,\nregion\n)\nSELECT \n'{{ DistributionConfigWithTags }}' /* required */,\n'{{ region }}'\nRETURNING\nDistribution,\nETag,\nLocation\n;\n"})})]}),(0,s.jsxs)(l.A,{value:"create_streaming_distribution_with_tags",children:[(0,s.jsx)(i.p,{children:"This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, read the announcement on the Amazon CloudFront discussion forum."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.cloudfront.tags (\nStreamingDistributionConfigWithTags,\nregion\n)\nSELECT \n'{{ StreamingDistributionConfigWithTags }}' /* required */,\n'{{ region }}'\nRETURNING\nETag,\nLocation,\nStreamingDistribution\n;\n"})})]}),(0,s.jsx)(l.A,{value:"manifest",children:(0,s.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: tags
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the tags resource.
  - name: DistributionConfigWithTags
    description: |
      A distribution Configuration and a list of tags to be associated with the distribution.
    value:
      DistributionConfig:
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
                Items: "{{ Items }}"
              S3OriginConfig:
                OriginAccessIdentity: "{{ OriginAccessIdentity }}"
                OriginReadTimeout: {{ OriginReadTimeout }}
              CustomOriginConfig:
                HTTPPort: {{ HTTPPort }}
                HTTPSPort: {{ HTTPSPort }}
                OriginProtocolPolicy: "{{ OriginProtocolPolicy }}"
                OriginSslProtocols: "{{ OriginSslProtocols }}"
                OriginReadTimeout: {{ OriginReadTimeout }}
                OriginKeepaliveTimeout: {{ OriginKeepaliveTimeout }}
                IpAddressType: "{{ IpAddressType }}"
                OriginMtlsConfig: "{{ OriginMtlsConfig }}"
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
                StatusCodes: "{{ StatusCodes }}"
              Members:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
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
        CacheBehaviors:
          Quantity: {{ Quantity }}
          Items:
            - PathPattern: "{{ PathPattern }}"
              TargetOriginId: "{{ TargetOriginId }}"
              TrustedSigners:
                Enabled: {{ Enabled }}
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              TrustedKeyGroups:
                Enabled: {{ Enabled }}
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              ViewerProtocolPolicy: "{{ ViewerProtocolPolicy }}"
              AllowedMethods:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
                CachedMethods: "{{ CachedMethods }}"
              SmoothStreaming: {{ SmoothStreaming }}
              Compress: {{ Compress }}
              LambdaFunctionAssociations:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              FunctionAssociations:
                Quantity: {{ Quantity }}
                Items: "{{ Items }}"
              FieldLevelEncryptionId: "{{ FieldLevelEncryptionId }}"
              RealtimeLogConfigArn: "{{ RealtimeLogConfigArn }}"
              CachePolicyId: "{{ CachePolicyId }}"
              OriginRequestPolicyId: "{{ OriginRequestPolicyId }}"
              ResponseHeadersPolicyId: "{{ ResponseHeadersPolicyId }}"
              GrpcConfig:
                Enabled: {{ Enabled }}
              ForwardedValues:
                QueryString: {{ QueryString }}
                Cookies: "{{ Cookies }}"
                Headers: "{{ Headers }}"
                QueryStringCacheKeys: "{{ QueryStringCacheKeys }}"
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
                StringSchema: "{{ StringSchema }}"
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
      Tags:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
  - name: StreamingDistributionConfigWithTags
    description: |
      A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
    value:
      StreamingDistributionConfig:
        CallerReference: "{{ CallerReference }}"
        S3Origin:
          DomainName: "{{ DomainName }}"
          OriginAccessIdentity: "{{ OriginAccessIdentity }}"
        Aliases:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        Comment: "{{ Comment }}"
        Logging:
          Enabled: {{ Enabled }}
          Bucket: "{{ Bucket }}"
          Prefix: "{{ Prefix }}"
        TrustedSigners:
          Enabled: {{ Enabled }}
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        PriceClass: "{{ PriceClass }}"
        Enabled: {{ Enabled }}
      Tags:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`})})]}),"\n",(0,s.jsxs)(i.h2,{id:"update-examples",children:[(0,s.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"untag_resource",values:[{label:"untag_resource",value:"untag_resource"},{label:"tag_resource",value:"tag_resource"}],children:[(0,s.jsxs)(l.A,{value:"untag_resource",children:[(0,s.jsx)(i.p,{children:"Remove tags from a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.cloudfront.tags\nSET \nTagKeys = '{{ TagKeys }}'\nWHERE \nResource = '{{ Resource }}' --required\nAND region = '{{ region }}' --required\nAND TagKeys = '{{ TagKeys }}' --required;\n"})})]}),(0,s.jsxs)(l.A,{value:"tag_resource",children:[(0,s.jsx)(i.p,{children:"Add tags to a CloudFront resource. For more information, see Tagging a distribution in the Amazon CloudFront Developer Guide."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.cloudfront.tags\nSET \nTags = '{{ Tags }}'\nWHERE \nResource = '{{ Resource }}' --required\nAND region = '{{ region }}' --required;\n"})})]})]})]})}function x(e={}){let{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);