--- 
title: platform_branches
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_branches
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists a <code>platform_branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.platform_branches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_platform_branches"
    values={[
        { label: 'list_platform_branches', value: 'list_platform_branches' }
    ]}
>
<TabItem value="list_platform_branches">

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
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name of the platform branch.</td>
</tr>
<tr>
    <td><CopyableCode code="branch_order" /></td>
    <td><code>integer</code></td>
    <td>An ordinal number that designates the order in which platform branches have been added to a platform. This can be helpful, for example, if your code calls the ListPlatformBranches action and then displays a list of platform branches. A larger BranchOrder value designates a newer platform branch within the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_state" /></td>
    <td><code>string</code></td>
    <td>The support life cycle state of the platform branch. Possible values: beta | supported | deprecated | retired</td>
</tr>
<tr>
    <td><CopyableCode code="platform_name" /></td>
    <td><code>string</code></td>
    <td>The name of the platform to which this platform branch belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_tier_list" /></td>
    <td><code>string</code></td>
    <td>The environment tiers that platform versions in this branch support. Possible values: WebServer/Standard | Worker/SQS/HTTP</td>
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
    <td><a href="#list_platform_branches"><CopyableCode code="list_platform_branches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch. For definitions of platform branch and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.</td>
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
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate SearchFilter terms. The following list shows valid attribute values for each of the SearchFilter terms. Most operators take a single value. The in and not_in operators can take multiple values. Attribute = BranchName: Operator: = | != | begins_with | ends_with | contains | in | not_in Attribute = LifecycleState: Operator: = | != | in | not_in Values: beta | supported | deprecated | retired Attribute = PlatformName: Operator: = | != | begins_with | ends_with | contains | in | not_in Attribute = TierType: Operator: = | != Values: WebServer/Standard | Worker/SQS/HTTP Array size: limited to 10 SearchFilter objects. Within each SearchFilter item, the Values array is limited to 10 items.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of platform branch values returned in one call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_platform_branches"
    values={[
        { label: 'list_platform_branches', value: 'list_platform_branches' }
    ]}
>
<TabItem value="list_platform_branches">

Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch. For definitions of platform branch and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.

```sql
SELECT
branch_name,
branch_order,
lifecycle_state,
platform_name,
supported_tier_list
FROM aws.elasticbeanstalk.platform_branches
WHERE region = '{{ region }}' -- required
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
