--- 
title: organization_recommendation_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_recommendation_resources
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

Creates, updates, deletes, gets or lists an <code>organization_recommendation_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_recommendation_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.trustedadvisor.organization_recommendation_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organization_recommendation_resources"
    values={[
        { label: 'list_organization_recommendation_resources', value: 'list_organization_recommendation_resources' }
    ]}
>
<TabItem value="list_organization_recommendation_resources">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Recommendation Resource</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Recommendation Resource (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor::\d&#123;12&#125;:recommendation-resource\/&#91;\w-&#93;+\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_resource_id" /></td>
    <td><code>string</code></td>
    <td>The AWS resource identifier. There are certain checks that generate recommendation resources without an awsResourceId.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_status" /></td>
    <td><code>string</code></td>
    <td>The exclusion status of the Recommendation Resource (excluded, included)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Recommendation Resource was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the Recommendation Resource</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Recommendation ARN (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor:::organization-recommendation\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region_code" /></td>
    <td><code>string</code></td>
    <td>The AWS Region code that the Recommendation Resource is in</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Recommendation Resource (ok, warning, error)</td>
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
    <td><a href="#list_organization_recommendation_resources"><CopyableCode code="list_organization_recommendation_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-organization_recommendation_identifier"><code>organization_recommendation_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-exclusionStatus"><code>exclusionStatus</code></a>, <a href="#parameter-regionCode"><code>regionCode</code></a>, <a href="#parameter-affectedAccountId"><code>affectedAccountId</code></a></td>
    <td>List Resources of a Recommendation within an Organization. This API only supports prioritized recommendations and provides global priority recommendations, eliminating the need to call the API in each AWS Region.</td>
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
    <td>The AWS Organization organization's Recommendation identifier</td>
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
<tr id="parameter-exclusionStatus">
    <td><CopyableCode code="exclusionStatus" /></td>
    <td><code>string</code></td>
    <td>The exclusion status of the resource</td>
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
<tr id="parameter-regionCode">
    <td><CopyableCode code="regionCode" /></td>
    <td><code>string</code></td>
    <td>The AWS Region code of the resource</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the resource</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_organization_recommendation_resources"
    values={[
        { label: 'list_organization_recommendation_resources', value: 'list_organization_recommendation_resources' }
    ]}
>
<TabItem value="list_organization_recommendation_resources">

List Resources of a Recommendation within an Organization. This API only supports prioritized recommendations and provides global priority recommendations, eliminating the need to call the API in each AWS Region.

```sql
SELECT
id,
account_id,
arn,
aws_resource_id,
exclusion_status,
last_updated_at,
metadata,
recommendation_arn,
region_code,
status
FROM aws.trustedadvisor.organization_recommendation_resources
WHERE organization_recommendation_identifier = '{{ organization_recommendation_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
AND exclusionStatus = '{{ exclusionStatus }}'
AND regionCode = '{{ regionCode }}'
AND affectedAccountId = '{{ affectedAccountId }}'
;
```
</TabItem>
</Tabs>
