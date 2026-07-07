--- 
title: aws_opportunity_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - aws_opportunity_summaries
  - partnercentral_selling
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>aws_opportunity_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aws_opportunity_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.aws_opportunity_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aws_opportunity_summary"
    values={[
        { label: 'get_aws_opportunity_summary', value: 'get_aws_opportunity_summary' }
    ]}
>
<TabItem value="get_aws_opportunity_summary">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>Specifies the catalog in which the AWS Opportunity exists. This is the environment (e.g., AWS or Sandbox) where the opportunity is being managed. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Customer" /></td>
    <td><code>object</code></td>
    <td>Provides details about the customer associated with the AWS Opportunity, including account information, industry, and other customer data. These details help partners understand the business context of the opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="Insights" /></td>
    <td><code>object</code></td>
    <td>Provides insights into the AWS Opportunity, including engagement score and recommended actions that AWS suggests for the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="InvolvementType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of involvement AWS has in the opportunity, such as direct cosell or advisory support. This field helps partners understand the role AWS plays in advancing the opportunity. (For Visibility Only, Co-Sell)</td>
</tr>
<tr>
    <td><CopyableCode code="InvolvementTypeChangeReason" /></td>
    <td><code>string</code></td>
    <td>Provides a reason for any changes in the involvement type of AWS in the opportunity. This field is used to track why the level of AWS engagement has changed from For Visibility Only to Co-sell offering transparency into the partnership dynamics. (Expansion Opportunity, Change in Deal Information, Customer Requested, Technical Complexity, Risk Mitigation)</td>
</tr>
<tr>
    <td><CopyableCode code="LifeCycle" /></td>
    <td><code>object</code></td>
    <td>Contains lifecycle information for the AWS Opportunity, including review status, stage, and target close date. This field is crucial for partners to monitor the progression of the opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="OpportunityTeam" /></td>
    <td><code>array</code></td>
    <td>Details the AWS opportunity team, including members involved. This information helps partners know who from AWS is engaged and what their role is.</td>
</tr>
<tr>
    <td><CopyableCode code="Origin" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the AWS Opportunity originated from AWS or the partner. This helps distinguish between opportunities that were sourced by AWS and those referred by the partner. (AWS Referral, Partner Referral)</td>
</tr>
<tr>
    <td><CopyableCode code="Project" /></td>
    <td><code>object</code></td>
    <td>Provides details about the project associated with the AWS Opportunity, including the customer’s business problem, expected outcomes, and project scope. This information is crucial for understanding the broader context of the opportunity.</td>
</tr>
<tr>
    <td><CopyableCode code="RelatedEntityIds" /></td>
    <td><code>object</code></td>
    <td>Lists related entity identifiers, such as AWS products or partner solutions, associated with the AWS Opportunity. These identifiers provide additional context and help partners understand which AWS services are involved.</td>
</tr>
<tr>
    <td><CopyableCode code="RelatedOpportunityId" /></td>
    <td><code>string</code></td>
    <td>Provides the unique identifier of the related partner opportunity, allowing partners to link the AWS Opportunity to their corresponding opportunity in their CRM system. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Visibility" /></td>
    <td><code>string</code></td>
    <td>Defines the visibility level for the AWS Opportunity. Use Full visibility for most cases, while Limited visibility is reserved for special programs or sensitive opportunities. (Full, Limited)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_aws_opportunity_summary"><CopyableCode code="get_aws_opportunity_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a summary of an AWS Opportunity. This summary includes high-level details about the opportunity sourced from AWS, such as lifecycle information, customer details, and involvement type. It is useful for tracking updates on the AWS opportunity corresponding to an opportunity in the partner's account.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_aws_opportunity_summary"
    values={[
        { label: 'get_aws_opportunity_summary', value: 'get_aws_opportunity_summary' }
    ]}
>
<TabItem value="get_aws_opportunity_summary">

Retrieves a summary of an AWS Opportunity. This summary includes high-level details about the opportunity sourced from AWS, such as lifecycle information, customer details, and involvement type. It is useful for tracking updates on the AWS opportunity corresponding to an opportunity in the partner's account.

```sql
SELECT
Catalog,
Customer,
Insights,
InvolvementType,
InvolvementTypeChangeReason,
LifeCycle,
OpportunityTeam,
Origin,
Project,
RelatedEntityIds,
RelatedOpportunityId,
Visibility
FROM aws.partnercentral_selling.aws_opportunity_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
