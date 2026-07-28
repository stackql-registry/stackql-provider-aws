"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["447208"],{819080(e,t,a){a.r(t),a.d(t,{metadata:()=>s,default:()=>p,frontMatter:()=>h,contentTitle:()=>c,toc:()=>m,assets:()=>u});var s=JSON.parse('{"id":"services/quicksight/dashboards/index","title":"dashboards","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/quicksight/dashboards/index.md","sourceDirName":"services/quicksight/dashboards","slug":"/services/quicksight/dashboards/","permalink":"/services/quicksight/dashboards/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"dashboards","hide_title":false,"hide_table_of_contents":false,"keywords":["dashboards","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"dashboard_versions","permalink":"/services/quicksight/dashboard_versions/"},"next":{"title":"dashboards_qa_configurations","permalink":"/services/quicksight/dashboards_qa_configurations/"}}'),r=a(474848),i=a(28453),n=a(97362),o=a(897272),d=a(413554),l=a(541647);let h={title:"dashboards",hide_title:!1,hide_table_of_contents:!1,keywords:["dashboards","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},c,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function b(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"dashboards"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"dashboards"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"aws.quicksight.dashboards"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_dashboard",values:[{label:"describe_dashboard",value:"describe_dashboard"},{label:"search_dashboards",value:"search_dashboards"},{label:"list_dashboards",value:"list_dashboards"}],children:[(0,r.jsx)(l.A,{value:"describe_dashboard",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Dashboard"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Information about the dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"RequestId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Web Services request ID for this operation."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The HTTP status of this request."})]})]})]})}),(0,r.jsx)(l.A,{value:"search_dashboards",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) of the resource."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"CreatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The time that this dashboard was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"DashboardId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Dashboard ID. (pattern: <code>[\\w-]+</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LastPublishedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this dashboard was published."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LastUpdatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this dashboard was updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A display name for the dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"PublishedVersionNumber"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"Published version number."})]})]})]})}),(0,r.jsx)(l.A,{value:"list_dashboards",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) of the resource."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"CreatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The time that this dashboard was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"DashboardId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Dashboard ID. (pattern: <code>[\\w-]+</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LastPublishedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this dashboard was published."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"LastUpdatedTime"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The last time that this dashboard was updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A display name for the dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"PublishedVersionNumber"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"Published version number."})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_dashboard",children:(0,r.jsx)(n.A,{code:"describe_dashboard"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-version-number",children:(0,r.jsx)("code",{children:"version-number"})}),", ",(0,r.jsx)("a",{href:"#parameter-alias-name",children:(0,r.jsx)("code",{children:"alias-name"})})]}),(0,r.jsx)("td",{children:"Provides a summary for a dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#search_dashboards",children:(0,r.jsx)(n.A,{code:"search_dashboards"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Searches for dashboards that belong to a user. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_dashboards",children:(0,r.jsx)(n.A,{code:"list_dashboards"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-next-token",children:(0,r.jsx)("code",{children:"next-token"})}),", ",(0,r.jsx)("a",{href:"#parameter-max-results",children:(0,r.jsx)("code",{children:"max-results"})})]}),(0,r.jsx)("td",{children:"Lists dashboards in an Amazon Web Services account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_dashboard",children:(0,r.jsx)(n.A,{code:"create_dashboard"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a dashboard from either a template or directly with a DashboardDefinition. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in Amazon Quick Sight that identifies Amazon Quick Sight reports, created from analyses. You can share Amazon Quick Sight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_dashboard_links",children:(0,r.jsx)(n.A,{code:"update_dashboard_links"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-LinkEntities",children:(0,r.jsx)("code",{children:"LinkEntities"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates the linked analyses on a dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_dashboard_published_version",children:(0,r.jsx)(n.A,{code:"update_dashboard_published_version"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-version_number",children:(0,r.jsx)("code",{children:"version_number"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates the published version of a dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_dashboard",children:(0,r.jsx)(n.A,{code:"update_dashboard"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates a dashboard in an Amazon Web Services account. Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the UpdateDashboardPublishedVersion API operation."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_dashboard",children:(0,r.jsx)(n.A,{code:"delete_dashboard"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-version-number",children:(0,r.jsx)("code",{children:"version-number"})})}),(0,r.jsx)("td",{children:"Deletes a dashboard."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#start_dashboard_snapshot_job",children:(0,r.jsx)(n.A,{code:"start_dashboard_snapshot_job"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-aws_account_id",children:(0,r.jsx)("code",{children:"aws_account_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-dashboard_id",children:(0,r.jsx)("code",{children:"dashboard_id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-SnapshotJobId",children:(0,r.jsx)("code",{children:"SnapshotJobId"})}),", ",(0,r.jsx)("a",{href:"#parameter-SnapshotConfiguration",children:(0,r.jsx)("code",{children:"SnapshotConfiguration"})})]}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:["Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call. 1 PDF 1 Excel workbook that includes up to 5 table or pivot table visuals 5 CSVs from table or pivot table visuals Exporting CSV, Excel, or Pixel Perfect PDF reports requires Pixel Perfect Report Add-on. The status of a submitted job can be polled with the DescribeDashboardSnapshotJob API. When you call the DescribeDashboardSnapshotJob API, check the JobStatus field in the response. Once the job reaches a COMPLETED or FAILED status, use the DescribeDashboardSnapshotJobResult API to obtain the URLs for the generated files. If the job fails, the DescribeDashboardSnapshotJobResult API returns detailed information about the error that occurred. StartDashboardSnapshotJob API throttling Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the StartDashboardSnapshotJob. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users. Common throttling scenarios The following list provides information about the most commin throttling scenarios that can occur. A large number of SnapshotExport API jobs are running simultaneously on an Amazon Web Services account. When a new StartDashboardSnapshotJob is created and there are already 12 jobs with the RUNNING status, the new job request fails and returns a LimitExceededException error. Wait for a current job to comlpete before you resubmit the new job. A large number of API requests are submitted on an Amazon Web Services account. When a user makes more than 10 API calls to the Quick Sight API in one second, a ThrottlingException is returned. If your use case requires a higher throttling limit, contact your account admin or Amazon Web ServicesSupport to explore options to tailor a more optimal expereince for your account. Best practices to handle throttling If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example (12 minutes * 9 = 108 minutes). Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline. The time that it takes to process a job can be impacted by the following factors: The dataset type (Direct Query or SPICE). The size of the dataset. The complexity of the calculated fields that are used in the dashboard. The number of visuals that are on a sheet. The types of visuals that are on the sheet. The number of formats and snapshots that are requested in the job configuration. The size of the generated snapshots. Registered user support You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with identity-enhanced IAM role session credentials. This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings. To generate snapshots for registered Quick Sight users, you need to: Obtain identity-enhanced IAM role session credentials from Amazon Web Services Security Token Service (STS). Use these credentials to call the Snapshot Job APIs. Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user). If your Quick Sight users are backed by Amazon Web Services Identity Center, then you need to set up a trusted token issuer. Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following: Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back. Use the OIDC API, CreateTokenWithIAM, to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token. Call STS AssumeRole API as you normally would, but provide an extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws",":contextProvider","/IdentityCenter while ContextAssertion will be the identity token you received in response from CreateTokenWithIAM For more details, see IdC documentation on Identity-enhanced IAM role sessions. To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below: Call Quick Sight GetIdentityContext API to get identity token. Call STS AssumeRole API as you normally would, but provide extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws",":contextProvider","/QuickSight while ContextAssertion will be the identity token you received in response from GetIdentityContext After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user. When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The impersonated Quick Sight user doesn't have access to the specified dashboard. The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see Customizing access to Amazon Quick Sight capabilities."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-aws_account_id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"aws_account_id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the Amazon Web Services account that the dashboard snapshot job is executed in."})]}),(0,r.jsxs)("tr",{id:"parameter-dashboard_id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"dashboard_id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the dashboard that you want to start a snapshot job for."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-version_number",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"version_number"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"The version number of the dashboard."})]}),(0,r.jsxs)("tr",{id:"parameter-alias-name",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"alias-name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The alias name."})]}),(0,r.jsxs)("tr",{id:"parameter-max-results",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"max-results"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The maximum number of results to be returned per request."})]}),(0,r.jsxs)("tr",{id:"parameter-next-token",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"next-token"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The token for the next set of results, or null if there are no more results."})]}),(0,r.jsxs)("tr",{id:"parameter-version-number",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"version-number"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer (int64)"})}),(0,r.jsx)("td",{children:"The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted."})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"describe_dashboard",values:[{label:"describe_dashboard",value:"describe_dashboard"},{label:"search_dashboards",value:"search_dashboards"},{label:"list_dashboards",value:"list_dashboards"}],children:[(0,r.jsxs)(l.A,{value:"describe_dashboard",children:[(0,r.jsx)(t.p,{children:"Provides a summary for a dashboard."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nDashboard,\nRequestId,\nStatus\nFROM aws.quicksight.dashboards\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND dashboard_id = '{{ dashboard_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `version-number` = '{{ version-number }}'\nAND `alias-name` = '{{ alias-name }}'\n;\n"})})]}),(0,r.jsxs)(l.A,{value:"search_dashboards",children:[(0,r.jsx)(t.p,{children:"Searches for dashboards that belong to a user. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCreatedTime,\nDashboardId,\nLastPublishedTime,\nLastUpdatedTime,\nName,\nPublishedVersionNumber\nFROM aws.quicksight.dashboards\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(l.A,{value:"list_dashboards",children:[(0,r.jsx)(t.p,{children:"Lists dashboards in an Amazon Web Services account."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCreatedTime,\nDashboardId,\nLastPublishedTime,\nLastUpdatedTime,\nName,\nPublishedVersionNumber\nFROM aws.quicksight.dashboards\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `next-token` = '{{ next-token }}'\nAND `max-results` = '{{ max-results }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"create_dashboard",values:[{label:"create_dashboard",value:"create_dashboard"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(l.A,{value:"create_dashboard",children:[(0,r.jsx)(t.p,{children:"Creates a dashboard from either a template or directly with a DashboardDefinition. To first create a template, see the CreateTemplate API operation. A dashboard is an entity in Amazon Quick Sight that identifies Amazon Quick Sight reports, created from analyses. You can share Amazon Quick Sight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.quicksight.dashboards (\nName,\nParameters,\nPermissions,\nSourceEntity,\nTags,\nVersionDescription,\nDashboardPublishOptions,\nThemeArn,\nDefinition,\nValidationStrategy,\nFolderArns,\nLinkSharingConfiguration,\nLinkEntities,\naws_account_id,\ndashboard_id,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ Parameters }}',\n'{{ Permissions }}',\n'{{ SourceEntity }}',\n'{{ Tags }}',\n'{{ VersionDescription }}',\n'{{ DashboardPublishOptions }}',\n'{{ ThemeArn }}',\n'{{ Definition }}',\n'{{ ValidationStrategy }}',\n'{{ FolderArns }}',\n'{{ LinkSharingConfiguration }}',\n'{{ LinkEntities }}',\n'{{ aws_account_id }}',\n'{{ dashboard_id }}',\n'{{ region }}'\nRETURNING\nArn,\nCreationStatus,\nDashboardId,\nRequestId,\nStatus,\nVersionArn\n;\n"})})]}),(0,r.jsx)(l.A,{value:"manifest",children:(0,r.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: dashboards
props:
  - name: aws_account_id
    value: "{{ aws_account_id }}"
    description: Required parameter for the dashboards resource.
  - name: dashboard_id
    value: "{{ dashboard_id }}"
    description: Required parameter for the dashboards resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the dashboards resource.
  - name: Name
    value: "{{ Name }}"
  - name: Parameters
    description: |
      A list of Quick Sight parameters and the list's override values.
    value:
      StringParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      IntegerParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      DecimalParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
      DateTimeParameters:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
  - name: Permissions
    value:
      - Principal: "{{ Principal }}"
        Actions: "{{ Actions }}"
  - name: SourceEntity
    description: |
      Dashboard source entity.
    value:
      SourceTemplate:
        DataSetReferences:
          - DataSetPlaceholder: "{{ DataSetPlaceholder }}"
            DataSetArn: "{{ DataSetArn }}"
        Arn: "{{ Arn }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: VersionDescription
    value: "{{ VersionDescription }}"
  - name: DashboardPublishOptions
    description: |
      Dashboard publish options.
    value:
      AdHocFilteringOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      ExportToCSVOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      SheetControlsOption:
        VisibilityState: "{{ VisibilityState }}"
      VisualPublishOptions:
        ExportHiddenFieldsOption:
          AvailabilityStatus: "{{ AvailabilityStatus }}"
      SheetLayoutElementMaximizationOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      VisualMenuOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      VisualAxisSortOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      ExportWithHiddenFieldsOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      DataPointDrillUpDownOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      DataPointMenuLabelOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      DataPointTooltipOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      DataQAEnabledOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      QuickSuiteActionsOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      ExecutiveSummaryOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
      DataStoriesSharingOption:
        AvailabilityStatus: "{{ AvailabilityStatus }}"
  - name: ThemeArn
    value: "{{ ThemeArn }}"
  - name: Definition
    description: |
      The contents of a dashboard.
    value:
      DataSetIdentifierDeclarations:
        - Identifier: "{{ Identifier }}"
          DataSetArn: "{{ DataSetArn }}"
      Sheets:
        - SheetId: "{{ SheetId }}"
          Title: "{{ Title }}"
          Description: "{{ Description }}"
          Name: "{{ Name }}"
          ParameterControls: "{{ ParameterControls }}"
          FilterControls: "{{ FilterControls }}"
          Visuals: "{{ Visuals }}"
          TextBoxes: "{{ TextBoxes }}"
          Images: "{{ Images }}"
          Layouts: "{{ Layouts }}"
          SheetControlLayouts: "{{ SheetControlLayouts }}"
          ContentType: "{{ ContentType }}"
          CustomActionDefaults:
            highlightOperation:
              Trigger: "{{ Trigger }}"
      TooltipSheets:
        - SheetId: "{{ SheetId }}"
          Name: "{{ Name }}"
          Visuals: "{{ Visuals }}"
          TextBoxes: "{{ TextBoxes }}"
          Images: "{{ Images }}"
          Layouts: "{{ Layouts }}"
      CalculatedFields:
        - DataSetIdentifier: "{{ DataSetIdentifier }}"
          Name: "{{ Name }}"
          Expression: "{{ Expression }}"
      ParameterDeclarations:
        - StringParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - "{{ StaticValues }}"
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: "{{ CustomValue }}"
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          DecimalParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - {{ StaticValues }}
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: {{ CustomValue }}
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          IntegerParameterDeclaration:
            ParameterValueType: "{{ ParameterValueType }}"
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - {{ StaticValues }}
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: {{ CustomValue }}
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
          DateTimeParameterDeclaration:
            Name: "{{ Name }}"
            DefaultValues:
              DynamicValue:
                UserNameColumn: "{{ UserNameColumn }}"
                GroupNameColumn: "{{ GroupNameColumn }}"
                DefaultValueColumn: "{{ DefaultValueColumn }}"
              StaticValues:
                - "{{ StaticValues }}"
              RollingDate:
                DataSetIdentifier: "{{ DataSetIdentifier }}"
                Expression: "{{ Expression }}"
            TimeGranularity: "{{ TimeGranularity }}"
            ValueWhenUnset:
              ValueWhenUnsetOption: "{{ ValueWhenUnsetOption }}"
              CustomValue: "{{ CustomValue }}"
            MappedDataSetParameters:
              - DataSetIdentifier: "{{ DataSetIdentifier }}"
                DataSetParameterName: "{{ DataSetParameterName }}"
      FilterGroups:
        - FilterGroupId: "{{ FilterGroupId }}"
          Filters: "{{ Filters }}"
          ScopeConfiguration:
            SelectedSheets:
              SheetVisualScopingConfigurations:
                - SheetId: "{{ SheetId }}"
                  Scope: "{{ Scope }}"
                  VisualIds: "{{ VisualIds }}"
            AllSheets: "{{ AllSheets }}"
          Status: "{{ Status }}"
          CrossDataset: "{{ CrossDataset }}"
      ColumnConfigurations:
        - Column:
            DataSetIdentifier: "{{ DataSetIdentifier }}"
            ColumnName: "{{ ColumnName }}"
          FormatConfiguration:
            StringFormatConfiguration:
              NullValueFormatConfiguration:
                NullString: "{{ NullString }}"
              NumericFormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
            NumberFormatConfiguration:
              FormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
            DateTimeFormatConfiguration:
              DateTimeFormat: "{{ DateTimeFormat }}"
              NullValueFormatConfiguration:
                NullString: "{{ NullString }}"
              NumericFormatConfiguration:
                NumberDisplayFormatConfiguration: "{{ NumberDisplayFormatConfiguration }}"
                CurrencyDisplayFormatConfiguration: "{{ CurrencyDisplayFormatConfiguration }}"
                PercentageDisplayFormatConfiguration: "{{ PercentageDisplayFormatConfiguration }}"
          Role: "{{ Role }}"
          ColorsConfiguration:
            CustomColors:
              - FieldValue: "{{ FieldValue }}"
                Color: "{{ Color }}"
                SpecialValue: "{{ SpecialValue }}"
          DecalSettingsConfiguration:
            CustomDecalSettings:
              - ElementValue: "{{ ElementValue }}"
                DecalVisibility: "{{ DecalVisibility }}"
                DecalColor: "{{ DecalColor }}"
                DecalPatternType: "{{ DecalPatternType }}"
                DecalStyleType: "{{ DecalStyleType }}"
      AnalysisDefaults:
        DefaultNewSheetConfiguration:
          InteractiveLayoutConfiguration:
            Grid:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
            FreeForm:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
          PaginatedLayoutConfiguration:
            SectionBased:
              CanvasSizeOptions: "{{ CanvasSizeOptions }}"
          SheetContentType: "{{ SheetContentType }}"
      Options:
        Timezone: "{{ Timezone }}"
        WeekStart: "{{ WeekStart }}"
        QBusinessInsightsStatus: "{{ QBusinessInsightsStatus }}"
        ExcludedDataSetArns:
          - "{{ ExcludedDataSetArns }}"
        CustomActionDefaults:
          highlightOperation:
            Trigger: "{{ Trigger }}"
      StaticFiles:
        - ImageStaticFile:
            StaticFileId: "{{ StaticFileId }}"
            Source:
              UrlOptions:
                Url: "{{ Url }}"
              S3Options:
                BucketName: "{{ BucketName }}"
                ObjectKey: "{{ ObjectKey }}"
                Region: "{{ Region }}"
          SpatialStaticFile:
            StaticFileId: "{{ StaticFileId }}"
            Source:
              UrlOptions:
                Url: "{{ Url }}"
              S3Options:
                BucketName: "{{ BucketName }}"
                ObjectKey: "{{ ObjectKey }}"
                Region: "{{ Region }}"
  - name: ValidationStrategy
    description: |
      The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to LENIENT, validation is skipped for specific errors.
    value:
      Mode: "{{ Mode }}"
  - name: FolderArns
    value:
      - "{{ FolderArns }}"
  - name: LinkSharingConfiguration
    description: |
      A structure that contains the configuration of a shareable link to the dashboard.
    value:
      Permissions:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
  - name: LinkEntities
    value:
      - "{{ LinkEntities }}"
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"update_dashboard_links",values:[{label:"update_dashboard_links",value:"update_dashboard_links"},{label:"update_dashboard_published_version",value:"update_dashboard_published_version"},{label:"update_dashboard",value:"update_dashboard"}],children:[(0,r.jsxs)(l.A,{value:"update_dashboard_links",children:[(0,r.jsx)(t.p,{children:"Updates the linked analyses on a dashboard."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.quicksight.dashboards\nSET \nLinkEntities = '{{ LinkEntities }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND dashboard_id = '{{ dashboard_id }}' --required\nAND region = '{{ region }}' --required\nAND LinkEntities = '{{ LinkEntities }}' --required\nRETURNING\nDashboardArn,\nLinkEntities,\nRequestId,\nStatus;\n"})})]}),(0,r.jsxs)(l.A,{value:"update_dashboard_published_version",children:[(0,r.jsx)(t.p,{children:"Updates the published version of a dashboard."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.quicksight.dashboards\nSET \n-- No updatable properties\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND dashboard_id = '{{ dashboard_id }}' --required\nAND version_number = '{{ version_number }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nDashboardArn,\nDashboardId,\nRequestId,\nStatus;\n"})})]}),(0,r.jsxs)(l.A,{value:"update_dashboard",children:[(0,r.jsx)(t.p,{children:"Updates a dashboard in an Amazon Web Services account. Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the UpdateDashboardPublishedVersion API operation."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.quicksight.dashboards\nSET \nName = '{{ Name }}',\nSourceEntity = '{{ SourceEntity }}',\nParameters = '{{ Parameters }}',\nVersionDescription = '{{ VersionDescription }}',\nDashboardPublishOptions = '{{ DashboardPublishOptions }}',\nThemeArn = '{{ ThemeArn }}',\nDefinition = '{{ Definition }}',\nValidationStrategy = '{{ ValidationStrategy }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND dashboard_id = '{{ dashboard_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nArn,\nCreationStatus,\nDashboardId,\nRequestId,\nStatus,\nVersionArn;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"delete_dashboard",values:[{label:"delete_dashboard",value:"delete_dashboard"}],children:(0,r.jsxs)(l.A,{value:"delete_dashboard",children:[(0,r.jsx)(t.p,{children:"Deletes a dashboard."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.quicksight.dashboards\nWHERE aws_account_id = '{{ aws_account_id }}' --required\nAND dashboard_id = '{{ dashboard_id }}' --required\nAND region = '{{ region }}' --required\nAND `version-number` = '{{ version-number }}'\n;\n"})})]})}),"\n",(0,r.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,r.jsx)(d.A,{defaultValue:"start_dashboard_snapshot_job",values:[{label:"start_dashboard_snapshot_job",value:"start_dashboard_snapshot_job"}],children:(0,r.jsxs)(l.A,{value:"start_dashboard_snapshot_job",children:[(0,r.jsxs)(t.p,{children:["Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call. 1 PDF 1 Excel workbook that includes up to 5 table or pivot table visuals 5 CSVs from table or pivot table visuals Exporting CSV, Excel, or Pixel Perfect PDF reports requires Pixel Perfect Report Add-on. The status of a submitted job can be polled with the DescribeDashboardSnapshotJob API. When you call the DescribeDashboardSnapshotJob API, check the JobStatus field in the response. Once the job reaches a COMPLETED or FAILED status, use the DescribeDashboardSnapshotJobResult API to obtain the URLs for the generated files. If the job fails, the DescribeDashboardSnapshotJobResult API returns detailed information about the error that occurred. StartDashboardSnapshotJob API throttling Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the StartDashboardSnapshotJob. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users. Common throttling scenarios The following list provides information about the most commin throttling scenarios that can occur. A large number of SnapshotExport API jobs are running simultaneously on an Amazon Web Services account. When a new StartDashboardSnapshotJob is created and there are already 12 jobs with the RUNNING status, the new job request fails and returns a LimitExceededException error. Wait for a current job to comlpete before you resubmit the new job. A large number of API requests are submitted on an Amazon Web Services account. When a user makes more than 10 API calls to the Quick Sight API in one second, a ThrottlingException is returned. If your use case requires a higher throttling limit, contact your account admin or Amazon Web ServicesSupport to explore options to tailor a more optimal expereince for your account. Best practices to handle throttling If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example (12 minutes * 9 = 108 minutes). Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline. The time that it takes to process a job can be impacted by the following factors: The dataset type (Direct Query or SPICE). The size of the dataset. The complexity of the calculated fields that are used in the dashboard. The number of visuals that are on a sheet. The types of visuals that are on the sheet. The number of formats and snapshots that are requested in the job configuration. The size of the generated snapshots. Registered user support You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with identity-enhanced IAM role session credentials. This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings. To generate snapshots for registered Quick Sight users, you need to: Obtain identity-enhanced IAM role session credentials from Amazon Web Services Security Token Service (STS). Use these credentials to call the Snapshot Job APIs. Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user). If your Quick Sight users are backed by Amazon Web Services Identity Center, then you need to set up a trusted token issuer. Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following: Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back. Use the OIDC API, CreateTokenWithIAM, to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token. Call STS AssumeRole API as you normally would, but provide an extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws",":contextProvider","/IdentityCenter while ContextAssertion will be the identity token you received in response from CreateTokenWithIAM For more details, see IdC documentation on Identity-enhanced IAM role sessions. To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below: Call Quick Sight GetIdentityContext API to get identity token. Call STS AssumeRole API as you normally would, but provide extra ProvidedContexts parameter in the API request. The list of contexts must have a single trusted context assertion. The ProviderArn should be arn:aws:iam::aws",":contextProvider","/QuickSight while ContextAssertion will be the identity token you received in response from GetIdentityContext After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user. When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid. Possible error scenarios The request fails with an Access Denied error in the following scenarios: The credentials have expired. The impersonated Quick Sight user doesn't have access to the specified dashboard. The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see Customizing access to Amazon Quick Sight capabilities."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'EXEC aws.quicksight.dashboards.start_dashboard_snapshot_job \n@aws_account_id=\'{{ aws_account_id }}\' --required, \n@dashboard_id=\'{{ dashboard_id }}\' --required, \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"SnapshotJobId": "{{ SnapshotJobId }}", \n"UserConfiguration": "{{ UserConfiguration }}", \n"SnapshotConfiguration": "{{ SnapshotConfiguration }}"\n}\'\n;\n'})})]})})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);