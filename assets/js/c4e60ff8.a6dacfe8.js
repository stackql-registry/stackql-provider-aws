"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["242336"],{759454(e,t,s){s.r(t),s.d(t,{metadata:()=>i,default:()=>j,frontMatter:()=>l,contentTitle:()=>u,toc:()=>g,assets:()=>h});var i=JSON.parse('{"id":"services/budgets/budgets/index","title":"budgets","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/budgets/budgets/index.md","sourceDirName":"services/budgets/budgets","slug":"/services/budgets/budgets/","permalink":"/services/budgets/budgets/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"budgets","hide_title":false,"hide_table_of_contents":false,"keywords":["budgets","budgets","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"budget_performance_histories","permalink":"/services/budgets/budget_performance_histories/"},"next":{"title":"notifications_for_budgets","permalink":"/services/budgets/notifications_for_budgets/"}}'),n=s(474848),d=s(28453),a=s(97362),r=s(897272),o=s(413554),c=s(541647);let l={title:"budgets",hide_title:!1,hide_table_of_contents:!1,keywords:["budgets","budgets","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},g=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"budgets"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"budgets"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"aws.budgets.budgets"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"describe_budget",values:[{label:"describe_budget",value:"describe_budget"},{label:"describe_budgets",value:"describe_budgets"}],children:[(0,n.jsx)(c.A,{value:"describe_budget",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"AutoAdjustData"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The parameters that determine the budget amount for an auto-adjusting budget."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BillingViewArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API. (pattern: <code>^arn",":aws","[a-z-]*:(billing)::[0-9]{12}",":billingview","/[a-zA-Z0-9/:_+=.-@]{0,75}[a-zA-Z0-9]$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetLimit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget. BudgetLimit is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to 100. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use BudgetLimit with PlannedBudgetLimits for CreateBudget and UpdateBudget actions."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:['The name of a budget. The name must be unique within an account. The : and \\ characters, and the "/action/" substring, aren\'t allowed in BudgetName. (pattern: <code>^(?![^:\\]',(0,n.jsx)(t.em,{children:"/action/|(?i)."}),"<script>.",(0,n.jsx)(t.em,{children:"<\/script>."}),")[^:\\]+$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage. (USAGE, COST, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, SAVINGS_PLANS_COVERAGE)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CalculatedSpend"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The actual and forecasted cost or usage that the budget tracks."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CostFilters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The cost filters, such as Region, Service, LinkedAccount, Tag, or CostCategory, that are applied to a budget. Amazon Web Services Budgets supports the following services as a Service filter for RI budgets: Amazon EC2 Amazon Redshift Amazon Relational Database Service Amazon ElastiCache Amazon OpenSearch Service"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CostTypes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The types of costs that are included in this COST budget. USAGE, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, and SAVINGS_PLANS_COVERAGE budgets do not have CostTypes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"FilterExpression"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The filtering dimensions for the budget and their corresponding values."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"HealthStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The current operational state of a Billing View derived resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"LastUpdatedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that you updated this budget."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Metrics"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The definition for how the budget data is aggregated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"PlannedBudgetLimits"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A map containing multiple BudgetLimit, including current or future limits. PlannedBudgetLimits is available for cost or usage budget and supports both monthly and quarterly TimeUnit. For monthly budgets, provide 12 months of PlannedBudgetLimits values. This must start from the current month and include the next 11 months. The key is the start of the month, UTC in epoch seconds. For quarterly budgets, provide four quarters of PlannedBudgetLimits value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The key is the start of the quarter, UTC in epoch seconds. If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the PlannedBudgetLimits values only for the remaining periods. If the budget begins at a date in the future, provide PlannedBudgetLimits values from the start date of the budget. After all of the BudgetLimit values in PlannedBudgetLimits are used, the budget continues to use the last limit as the BudgetLimit. At that point, the planned budget provides the same experience as a fixed budget. DescribeBudget and DescribeBudgets response along with PlannedBudgetLimits also contain BudgetLimit representing the current month or quarter limit present in PlannedBudgetLimits. This only applies to budgets that are created with PlannedBudgetLimits. Budgets that are created without PlannedBudgetLimits only contain BudgetLimit. They don't contain PlannedBudgetLimits."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TimePeriod"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The period of time that's covered by a budget. You set the start date and end date. The start date must come before the end date. The end date must come before 06/15/87 00:00 UTC. If you create your budget and don't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For example, if you created your budget on January 24, 2018, chose DAILY, and didn't set a start date, Amazon Web Services set your start date to 01/24/18 00:00 UTC. If you chose MONTHLY, Amazon Web Services set your start date to 01/01/18 00:00 UTC. If you didn't specify an end date, Amazon Web Services set your end date to 06/15/87 00:00 UTC. The defaults are the same for the Billing and Cost Management console and the API. You can change either date with the UpdateBudget operation. After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TimeUnit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The length of time until a budget resets the actual and forecasted spend. (DAILY, MONTHLY, QUARTERLY, ANNUALLY, CUSTOM)"})]})]})]})}),(0,n.jsx)(c.A,{value:"describe_budgets",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"AutoAdjustData"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The parameters that determine the budget amount for an auto-adjusting budget."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BillingViewArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API. (pattern: <code>^arn",":aws","[a-z-]*:(billing)::[0-9]{12}",":billingview","/[a-zA-Z0-9/:_+=.-@]{0,75}[a-zA-Z0-9]$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetLimit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget. BudgetLimit is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to 100. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use BudgetLimit with PlannedBudgetLimits for CreateBudget and UpdateBudget actions."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:['The name of a budget. The name must be unique within an account. The : and \\ characters, and the "/action/" substring, aren\'t allowed in BudgetName. (pattern: <code>^(?![^:\\]',(0,n.jsx)(t.em,{children:"/action/|(?i)."}),"<script>.",(0,n.jsx)(t.em,{children:"<\/script>."}),")[^:\\]+$</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"BudgetType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage. (USAGE, COST, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, SAVINGS_PLANS_COVERAGE)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CalculatedSpend"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The actual and forecasted cost or usage that the budget tracks."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CostFilters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The cost filters, such as Region, Service, LinkedAccount, Tag, or CostCategory, that are applied to a budget. Amazon Web Services Budgets supports the following services as a Service filter for RI budgets: Amazon EC2 Amazon Redshift Amazon Relational Database Service Amazon ElastiCache Amazon OpenSearch Service"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CostTypes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The types of costs that are included in this COST budget. USAGE, RI_UTILIZATION, RI_COVERAGE, SAVINGS_PLANS_UTILIZATION, and SAVINGS_PLANS_COVERAGE budgets do not have CostTypes."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"FilterExpression"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The filtering dimensions for the budget and their corresponding values."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"HealthStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The current operational state of a Billing View derived resource."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"LastUpdatedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The last time that you updated this budget."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Metrics"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The definition for how the budget data is aggregated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"PlannedBudgetLimits"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A map containing multiple BudgetLimit, including current or future limits. PlannedBudgetLimits is available for cost or usage budget and supports both monthly and quarterly TimeUnit. For monthly budgets, provide 12 months of PlannedBudgetLimits values. This must start from the current month and include the next 11 months. The key is the start of the month, UTC in epoch seconds. For quarterly budgets, provide four quarters of PlannedBudgetLimits value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The key is the start of the quarter, UTC in epoch seconds. If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the PlannedBudgetLimits values only for the remaining periods. If the budget begins at a date in the future, provide PlannedBudgetLimits values from the start date of the budget. After all of the BudgetLimit values in PlannedBudgetLimits are used, the budget continues to use the last limit as the BudgetLimit. At that point, the planned budget provides the same experience as a fixed budget. DescribeBudget and DescribeBudgets response along with PlannedBudgetLimits also contain BudgetLimit representing the current month or quarter limit present in PlannedBudgetLimits. This only applies to budgets that are created with PlannedBudgetLimits. Budgets that are created without PlannedBudgetLimits only contain BudgetLimit. They don't contain PlannedBudgetLimits."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TimePeriod"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The period of time that's covered by a budget. You set the start date and end date. The start date must come before the end date. The end date must come before 06/15/87 00:00 UTC. If you create your budget and don't specify a start date, Amazon Web Services defaults to the start of your chosen time period (DAILY, MONTHLY, QUARTERLY, ANNUALLY, or CUSTOM). For example, if you created your budget on January 24, 2018, chose DAILY, and didn't set a start date, Amazon Web Services set your start date to 01/24/18 00:00 UTC. If you chose MONTHLY, Amazon Web Services set your start date to 01/01/18 00:00 UTC. If you didn't specify an end date, Amazon Web Services set your end date to 06/15/87 00:00 UTC. The defaults are the same for the Billing and Cost Management console and the API. You can change either date with the UpdateBudget operation. After the end date, Amazon Web Services deletes the budget and all the associated notifications and subscribers."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TimeUnit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The length of time until a budget resets the actual and forecasted spend. (DAILY, MONTHLY, QUARTERLY, ANNUALLY, CUSTOM)"})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_budget",children:(0,n.jsx)(a.A,{code:"describe_budget"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Describes a budget. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_budgets",children:(0,n.jsx)(a.A,{code:"describe_budgets"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Lists the budgets that are associated with an account. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_notification",children:(0,n.jsx)(a.A,{code:"create_notification"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-BudgetName",children:(0,n.jsx)("code",{children:"BudgetName"})}),", ",(0,n.jsx)("a",{href:"#parameter-Notification",children:(0,n.jsx)("code",{children:"Notification"})}),", ",(0,n.jsx)("a",{href:"#parameter-Subscribers",children:(0,n.jsx)("code",{children:"Subscribers"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a notification. You must create the budget before you create the associated notification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_subscriber",children:(0,n.jsx)(a.A,{code:"create_subscriber"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-BudgetName",children:(0,n.jsx)("code",{children:"BudgetName"})}),", ",(0,n.jsx)("a",{href:"#parameter-Notification",children:(0,n.jsx)("code",{children:"Notification"})}),", ",(0,n.jsx)("a",{href:"#parameter-Subscriber",children:(0,n.jsx)("code",{children:"Subscriber"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a subscriber. You must create the associated budget and notification before you create the subscriber."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_budget",children:(0,n.jsx)(a.A,{code:"create_budget"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a budget and, if included, notifications and subscribers. Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your use case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section. Similarly, only one set of filter and metric selections can be present in the syntax at one time. Either FilterExpression and Metrics or CostFilters and CostTypes, not both or a different combination. We recommend using FilterExpression and Metrics as they provide more flexible and powerful filtering capabilities. The Request Syntax section shows the FilterExpression/Metrics syntax."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_subscriber",children:(0,n.jsx)(a.A,{code:"update_subscriber"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-BudgetName",children:(0,n.jsx)("code",{children:"BudgetName"})}),", ",(0,n.jsx)("a",{href:"#parameter-Notification",children:(0,n.jsx)("code",{children:"Notification"})}),", ",(0,n.jsx)("a",{href:"#parameter-OldSubscriber",children:(0,n.jsx)("code",{children:"OldSubscriber"})}),", ",(0,n.jsx)("a",{href:"#parameter-NewSubscriber",children:(0,n.jsx)("code",{children:"NewSubscriber"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a subscriber."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_notification",children:(0,n.jsx)(a.A,{code:"update_notification"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-BudgetName",children:(0,n.jsx)("code",{children:"BudgetName"})}),", ",(0,n.jsx)("a",{href:"#parameter-OldNotification",children:(0,n.jsx)("code",{children:"OldNotification"})}),", ",(0,n.jsx)("a",{href:"#parameter-NewNotification",children:(0,n.jsx)("code",{children:"NewNotification"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a notification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_budget",children:(0,n.jsx)(a.A,{code:"update_budget"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-NewBudget",children:(0,n.jsx)("code",{children:"NewBudget"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates a budget. You can change every part of a budget except for the budgetName and the calculatedSpend. When you modify a budget, the calculatedSpend drops to zero until Amazon Web Services has new usage data to use for forecasting. Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section. Similarly, only one set of filter and metric selections can be present in the syntax at one time. Either FilterExpression and Metrics or CostFilters and CostTypes, not both or a different combination. We recommend using FilterExpression and Metrics as they provide more flexible and powerful filtering capabilities. The Request Syntax section shows the FilterExpression/Metrics syntax."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_subscriber",children:(0,n.jsx)(a.A,{code:"delete_subscriber"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a subscriber. Deleting the last subscriber to a notification also deletes the notification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_notification",children:(0,n.jsx)(a.A,{code:"delete_notification"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a notification. Deleting a notification also deletes the subscribers that are associated with the notification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_budget",children:(0,n.jsx)(a.A,{code:"delete_budget"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a budget. You can delete your budget at any time. Deleting a budget also deletes the notifications and subscribers that are associated with that budget."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#execute_budget_action",children:(0,n.jsx)(a.A,{code:"execute_budget_action"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"exec"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AccountId",children:(0,n.jsx)("code",{children:"AccountId"})}),", ",(0,n.jsx)("a",{href:"#parameter-BudgetName",children:(0,n.jsx)("code",{children:"BudgetName"})}),", ",(0,n.jsx)("a",{href:"#parameter-ActionId",children:(0,n.jsx)("code",{children:"ActionId"})}),", ",(0,n.jsx)("a",{href:"#parameter-ExecutionType",children:(0,n.jsx)("code",{children:"ExecutionType"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Executes a budget action."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"describe_budget",values:[{label:"describe_budget",value:"describe_budget"},{label:"describe_budgets",value:"describe_budgets"}],children:[(0,n.jsxs)(c.A,{value:"describe_budget",children:[(0,n.jsx)(t.p,{children:"Describes a budget. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nAutoAdjustData,\nBillingViewArn,\nBudgetLimit,\nBudgetName,\nBudgetType,\nCalculatedSpend,\nCostFilters,\nCostTypes,\nFilterExpression,\nHealthStatus,\nLastUpdatedTime,\nMetrics,\nPlannedBudgetLimits,\nTimePeriod,\nTimeUnit\nFROM aws.budgets.budgets\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"describe_budgets",children:[(0,n.jsx)(t.p,{children:"Lists the budgets that are associated with an account. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nAutoAdjustData,\nBillingViewArn,\nBudgetLimit,\nBudgetName,\nBudgetType,\nCalculatedSpend,\nCostFilters,\nCostTypes,\nFilterExpression,\nHealthStatus,\nLastUpdatedTime,\nMetrics,\nPlannedBudgetLimits,\nTimePeriod,\nTimeUnit\nFROM aws.budgets.budgets\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"create_notification",values:[{label:"create_notification",value:"create_notification"},{label:"create_subscriber",value:"create_subscriber"},{label:"create_budget",value:"create_budget"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_notification",children:[(0,n.jsx)(t.p,{children:"Creates a notification. You must create the budget before you create the associated notification."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.budgets.budgets (\nAccountId,\nBudgetName,\nNotification,\nSubscribers,\nregion\n)\nSELECT \n'{{ AccountId }}' /* required */,\n'{{ BudgetName }}' /* required */,\n'{{ Notification }}' /* required */,\n'{{ Subscribers }}' /* required */,\n'{{ region }}'\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"create_subscriber",children:[(0,n.jsx)(t.p,{children:"Creates a subscriber. You must create the associated budget and notification before you create the subscriber."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.budgets.budgets (\nAccountId,\nBudgetName,\nNotification,\nSubscriber,\nregion\n)\nSELECT \n'{{ AccountId }}' /* required */,\n'{{ BudgetName }}' /* required */,\n'{{ Notification }}' /* required */,\n'{{ Subscriber }}' /* required */,\n'{{ region }}'\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"create_budget",children:[(0,n.jsx)(t.p,{children:"Creates a budget and, if included, notifications and subscribers. Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your use case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section. Similarly, only one set of filter and metric selections can be present in the syntax at one time. Either FilterExpression and Metrics or CostFilters and CostTypes, not both or a different combination. We recommend using FilterExpression and Metrics as they provide more flexible and powerful filtering capabilities. The Request Syntax section shows the FilterExpression/Metrics syntax."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.budgets.budgets (\nAccountId,\nBudget,\nNotificationsWithSubscribers,\nResourceTags,\nregion\n)\nSELECT \n'{{ AccountId }}' /* required */,\n'{{ Budget }}',\n'{{ NotificationsWithSubscribers }}',\n'{{ ResourceTags }}',\n'{{ region }}'\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(r.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: budgets
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the budgets resource.
  - name: AccountId
    value: "{{ AccountId }}"
    description: |
      The accountId that is associated with the budget.
  - name: BudgetName
    value: "{{ BudgetName }}"
    description: |
      A string that represents the budget name. The ":" and "" characters, and the "/action/" substring, aren't allowed.
  - name: Notification
    description: |
      The notification that you want to create a subscriber for.
    value:
      NotificationType: "{{ NotificationType }}"
      ComparisonOperator: "{{ ComparisonOperator }}"
      Threshold: {{ Threshold }}
      ThresholdType: "{{ ThresholdType }}"
      NotificationState: "{{ NotificationState }}"
  - name: Subscribers
    description: |
      A list of subscribers.
    value:
      - SubscriptionType: "{{ SubscriptionType }}"
        Address: "{{ Address }}"
  - name: Subscriber
    description: |
      The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address. For example, an email subscriber has the following parameters: A subscriptionType of EMAIL An address of example@example.com
    value:
      SubscriptionType: "{{ SubscriptionType }}"
      Address: "{{ Address }}"
  - name: Budget
    description: |
      The budget object that you want to create.
    value:
      BudgetName: "{{ BudgetName }}"
      BudgetLimit:
        Amount: "{{ Amount }}"
        Unit: "{{ Unit }}"
      PlannedBudgetLimits: "{{ PlannedBudgetLimits }}"
      CostFilters: "{{ CostFilters }}"
      CostTypes:
        IncludeTax: {{ IncludeTax }}
        IncludeSubscription: {{ IncludeSubscription }}
        UseBlended: {{ UseBlended }}
        IncludeRefund: {{ IncludeRefund }}
        IncludeCredit: {{ IncludeCredit }}
        IncludeUpfront: {{ IncludeUpfront }}
        IncludeRecurring: {{ IncludeRecurring }}
        IncludeOtherSubscription: {{ IncludeOtherSubscription }}
        IncludeSupport: {{ IncludeSupport }}
        IncludeDiscount: {{ IncludeDiscount }}
        UseAmortized: {{ UseAmortized }}
      TimeUnit: "{{ TimeUnit }}"
      TimePeriod:
        Start: "{{ Start }}"
        End: "{{ End }}"
      CalculatedSpend:
        ActualSpend:
          Amount: "{{ Amount }}"
          Unit: "{{ Unit }}"
        ForecastedSpend:
          Amount: "{{ Amount }}"
          Unit: "{{ Unit }}"
      BudgetType: "{{ BudgetType }}"
      LastUpdatedTime: "{{ LastUpdatedTime }}"
      AutoAdjustData:
        AutoAdjustType: "{{ AutoAdjustType }}"
        HistoricalOptions:
          BudgetAdjustmentPeriod: {{ BudgetAdjustmentPeriod }}
          LookBackAvailablePeriods: {{ LookBackAvailablePeriods }}
        LastAutoAdjustTime: "{{ LastAutoAdjustTime }}"
      FilterExpression:
        Or:
          - Or: "{{ Or }}"
            And: "{{ And }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
        And:
          - Or: "{{ Or }}"
            And: "{{ And }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
        Not:
          Or:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
          And:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
          Not:
            Or:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            And:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            Not:
              Or: "{{ Or }}"
              And: "{{ And }}"
              Not: "{{ Not }}"
              Dimensions: "{{ Dimensions }}"
              Tags: "{{ Tags }}"
              CostCategories: "{{ CostCategories }}"
            Dimensions:
              Key: "{{ Key }}"
              Values: "{{ Values }}"
              MatchOptions: "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values: "{{ Values }}"
              MatchOptions: "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values: "{{ Values }}"
              MatchOptions: "{{ MatchOptions }}"
          Dimensions:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          Tags:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          CostCategories:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
        Dimensions:
          Key: "{{ Key }}"
          Values:
            - "{{ Values }}"
          MatchOptions:
            - "{{ MatchOptions }}"
        Tags:
          Key: "{{ Key }}"
          Values:
            - "{{ Values }}"
          MatchOptions:
            - "{{ MatchOptions }}"
        CostCategories:
          Key: "{{ Key }}"
          Values:
            - "{{ Values }}"
          MatchOptions:
            - "{{ MatchOptions }}"
      Metrics:
        - "{{ Metrics }}"
      BillingViewArn: "{{ BillingViewArn }}"
      HealthStatus:
        Status: "{{ Status }}"
        StatusReason: "{{ StatusReason }}"
        LastUpdatedTime: "{{ LastUpdatedTime }}"
  - name: NotificationsWithSubscribers
    description: |
      A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your CreateBudget call, Amazon Web Services creates the notifications and subscribers for you.
    value:
      - Notification:
          NotificationType: "{{ NotificationType }}"
          ComparisonOperator: "{{ ComparisonOperator }}"
          Threshold: {{ Threshold }}
          ThresholdType: "{{ ThresholdType }}"
          NotificationState: "{{ NotificationState }}"
        Subscribers: "{{ Subscribers }}"
  - name: ResourceTags
    description: |
      An optional list of tags to associate with the specified budget. Each tag consists of a key and a value, and each key must be unique for the resource.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"update-examples",children:[(0,n.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"update_subscriber",values:[{label:"update_subscriber",value:"update_subscriber"},{label:"update_notification",value:"update_notification"},{label:"update_budget",value:"update_budget"}],children:[(0,n.jsxs)(c.A,{value:"update_subscriber",children:[(0,n.jsx)(t.p,{children:"Updates a subscriber."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.budgets.budgets\nSET \nAccountId = '{{ AccountId }}',\nBudgetName = '{{ BudgetName }}',\nNotification = '{{ Notification }}',\nOldSubscriber = '{{ OldSubscriber }}',\nNewSubscriber = '{{ NewSubscriber }}'\nWHERE \nregion = '{{ region }}' --required\nAND AccountId = '{{ AccountId }}' --required\nAND BudgetName = '{{ BudgetName }}' --required\nAND Notification = '{{ Notification }}' --required\nAND OldSubscriber = '{{ OldSubscriber }}' --required\nAND NewSubscriber = '{{ NewSubscriber }}' --required;\n"})})]}),(0,n.jsxs)(c.A,{value:"update_notification",children:[(0,n.jsx)(t.p,{children:"Updates a notification."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.budgets.budgets\nSET \nAccountId = '{{ AccountId }}',\nBudgetName = '{{ BudgetName }}',\nOldNotification = '{{ OldNotification }}',\nNewNotification = '{{ NewNotification }}'\nWHERE \nregion = '{{ region }}' --required\nAND AccountId = '{{ AccountId }}' --required\nAND BudgetName = '{{ BudgetName }}' --required\nAND OldNotification = '{{ OldNotification }}' --required\nAND NewNotification = '{{ NewNotification }}' --required;\n"})})]}),(0,n.jsxs)(c.A,{value:"update_budget",children:[(0,n.jsx)(t.p,{children:"Updates a budget. You can change every part of a budget except for the budgetName and the calculatedSpend. When you modify a budget, the calculatedSpend drops to zero until Amazon Web Services has new usage data to use for forecasting. Only one of BudgetLimit or PlannedBudgetLimits can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the BudgetLimit syntax. For PlannedBudgetLimits, see the Examples section. Similarly, only one set of filter and metric selections can be present in the syntax at one time. Either FilterExpression and Metrics or CostFilters and CostTypes, not both or a different combination. We recommend using FilterExpression and Metrics as they provide more flexible and powerful filtering capabilities. The Request Syntax section shows the FilterExpression/Metrics syntax."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.budgets.budgets\nSET \nAccountId = '{{ AccountId }}',\nNewBudget = '{{ NewBudget }}'\nWHERE \nregion = '{{ region }}' --required\nAND AccountId = '{{ AccountId }}' --required\nAND NewBudget = '{{ NewBudget }}' --required;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"delete_subscriber",values:[{label:"delete_subscriber",value:"delete_subscriber"},{label:"delete_notification",value:"delete_notification"},{label:"delete_budget",value:"delete_budget"}],children:[(0,n.jsxs)(c.A,{value:"delete_subscriber",children:[(0,n.jsx)(t.p,{children:"Deletes a subscriber. Deleting the last subscriber to a notification also deletes the notification."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.budgets.budgets\nWHERE region = '{{ region }}' --required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"delete_notification",children:[(0,n.jsx)(t.p,{children:"Deletes a notification. Deleting a notification also deletes the subscribers that are associated with the notification."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.budgets.budgets\nWHERE region = '{{ region }}' --required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"delete_budget",children:[(0,n.jsx)(t.p,{children:"Deletes a budget. You can delete your budget at any time. Deleting a budget also deletes the notifications and subscribers that are associated with that budget."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.budgets.budgets\nWHERE region = '{{ region }}' --required\n;\n"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,n.jsx)(o.A,{defaultValue:"execute_budget_action",values:[{label:"execute_budget_action",value:"execute_budget_action"}],children:(0,n.jsxs)(c.A,{value:"execute_budget_action",children:[(0,n.jsx)(t.p,{children:"Executes a budget action."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'EXEC aws.budgets.budgets.execute_budget_action \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"AccountId": "{{ AccountId }}", \n"BudgetName": "{{ BudgetName }}", \n"ActionId": "{{ ActionId }}", \n"ExecutionType": "{{ ExecutionType }}"\n}\'\n;\n'})})]})})]})}function j(e={}){let{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);