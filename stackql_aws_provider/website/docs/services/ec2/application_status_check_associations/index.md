--- 
title: application_status_check_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - application_status_check_associations
  - ec2
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

Creates, updates, deletes, gets or lists an <code>application_status_check_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_status_check_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.application_status_check_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_status_check_associations"
    values={[
        { label: 'describe_application_status_check_associations', value: 'describe_application_status_check_associations' }
    ]}
>
<TabItem value="describe_application_status_check_associations">

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
    <td><CopyableCode code="application_status_check_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application status check.</td>
</tr>
<tr>
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>The type of target that the application status check is associated with. Possible values: tag – The check applies to current and future instances with a matching tag key-value pair. instance-id – The check applies to a specific instance.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key for the association. This value is present only for tag-based associations, where it contains the tag key. For instance-based associations, this value is absent.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value for the association target. For tag-based associations, this is the tag value. For instance-based associations, this is the instance ID (for example, i-0123456789abcdef0).</td>
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
    <td><a href="#describe_application_status_check_associations"><CopyableCode code="describe_application_status_check_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationStatusCheckId"><code>ApplicationStatusCheckId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the associations for one or more application status checks. For more information, see Application status checks. To avoid timeouts and retrieve complete results, use the pagination parameters. The order of the elements in the response, including those within nested structures, might vary.</td>
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
<tr id="parameter-ApplicationStatusCheckId">
    <td><CopyableCode code="ApplicationStatusCheckId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the application status checks for which to describe associations.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters to use to limit the results. association-type – The type of association. Valid values: tag and instance-id.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_application_status_check_associations"
    values={[
        { label: 'describe_application_status_check_associations', value: 'describe_application_status_check_associations' }
    ]}
>
<TabItem value="describe_application_status_check_associations">

Describes the associations for one or more application status checks. For more information, see Application status checks. To avoid timeouts and retrieve complete results, use the pagination parameters. The order of the elements in the response, including those within nested structures, might vary.

```sql
SELECT
application_status_check_id,
association_type,
key,
value
FROM aws.ec2.application_status_check_associations
WHERE region = '{{ region }}' -- required
AND ApplicationStatusCheckId = '{{ ApplicationStatusCheckId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
