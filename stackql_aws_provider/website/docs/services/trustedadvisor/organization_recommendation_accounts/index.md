--- 
title: organization_recommendation_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_recommendation_accounts
  - trustedadvisor
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

Creates, updates, deletes, gets or lists an <code>organization_recommendation_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_recommendation_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.trustedadvisor.organization_recommendation_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organization_recommendation_accounts"
    values={[
        { label: 'list_organization_recommendation_accounts', value: 'list_organization_recommendation_accounts' }
    ]}
>
<TabItem value="list_organization_recommendation_accounts">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Recommendation ARN (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor::\d&#123;12&#125;:recommendation\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Recommendation was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_stage" /></td>
    <td><code>string</code></td>
    <td>The lifecycle stage from AWS Trusted Advisor Priority (in_progress, pending_response, dismissed, resolved)</td>
</tr>
<tr>
    <td><CopyableCode code="update_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for the lifecycle stage change (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_reason_code" /></td>
    <td><code>string</code></td>
    <td>Reason code for the lifecycle state change (non_critical_account, temporary_account, valid_business_case, other_methods_available, low_priority, not_applicable, other)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_on_behalf_of" /></td>
    <td><code>string</code></td>
    <td>The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority</td>
</tr>
<tr>
    <td><CopyableCode code="updated_on_behalf_of_job_title" /></td>
    <td><code>string</code></td>
    <td>The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority</td>
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
    <td><a href="#list_organization_recommendation_accounts"><CopyableCode code="list_organization_recommendation_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_recommendation_identifier"><code>organization_recommendation_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-affectedAccountId"><code>affectedAccountId</code></a></td>
    <td>Lists the accounts that own the resources for an organization aggregate recommendation. This API only supports prioritized recommendations and provides global priority recommendations, eliminating the need to call the API in each AWS Region.</td>
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
<tr id="parameter-organization_recommendation_identifier">
    <td><CopyableCode code="organization_recommendation_identifier" /></td>
    <td><code>string</code></td>
    <td>The Recommendation identifier</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-affectedAccountId">
    <td><CopyableCode code="affectedAccountId" /></td>
    <td><code>string</code></td>
    <td>An account affected by this organization recommendation</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_organization_recommendation_accounts"
    values={[
        { label: 'list_organization_recommendation_accounts', value: 'list_organization_recommendation_accounts' }
    ]}
>
<TabItem value="list_organization_recommendation_accounts">

Lists the accounts that own the resources for an organization aggregate recommendation. This API only supports prioritized recommendations and provides global priority recommendations, eliminating the need to call the API in each AWS Region.

```sql
SELECT
account_id,
account_recommendation_arn,
last_updated_at,
lifecycle_stage,
update_reason,
update_reason_code,
updated_on_behalf_of,
updated_on_behalf_of_job_title
FROM aws.trustedadvisor.organization_recommendation_accounts
WHERE organization_recommendation_identifier = '{{ organization_recommendation_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND affectedAccountId = '{{ affectedAccountId }}'
;
```
</TabItem>
</Tabs>
