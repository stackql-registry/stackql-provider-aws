--- 
title: standards
hide_title: false
hide_table_of_contents: false
keywords:
  - standards
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>standards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="standards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.standards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_standards"
    values={[
        { label: 'describe_standards', value: 'describe_standards' }
    ]}
>
<TabItem value="describe_standards">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_by_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether the standard is enabled by default. When Security Hub CSPM is enabled from the console, if a standard is enabled by default, the check box for that standard is selected by default. When Security Hub CSPM is enabled using the EnableSecurityHub API operation, the standard is enabled by default unless EnableDefaultStandards is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the standard. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standards_managed_by" /></td>
    <td><code>object</code></td>
    <td>Provides details about the management of a standard.</td>
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
    <td><a href="#describe_standards"><CopyableCode code="describe_standards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns a list of the available standards in Security Hub CSPM. For each standard, the results include the standard ARN, the name, and a description.</td>
</tr>
<tr>
    <td><a href="#batch_disable_standards"><CopyableCode code="batch_disable_standards" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StandardsSubscriptionArns"><code>StandardsSubscriptionArns</code></a></td>
    <td></td>
    <td>Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Security Standards section of the Security Hub CSPM User Guide.</td>
</tr>
<tr>
    <td><a href="#batch_enable_standards"><CopyableCode code="batch_enable_standards" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StandardsSubscriptionRequests"><code>StandardsSubscriptionRequests</code></a></td>
    <td></td>
    <td>Enables the standards specified by the provided StandardsArn. To obtain the ARN for a standard, use the DescribeStandards operation. For more information, see the Security Standards section of the Security Hub CSPM User Guide.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of standards to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that is required for pagination. On your first call to the DescribeStandards operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_standards"
    values={[
        { label: 'describe_standards', value: 'describe_standards' }
    ]}
>
<TabItem value="describe_standards">

Returns a list of the available standards in Security Hub CSPM. For each standard, the results include the standard ARN, the name, and a description.

```sql
SELECT
description,
enabled_by_default,
name,
standards_arn,
standards_managed_by
FROM aws.securityhub.standards
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_disable_standards"
    values={[
        { label: 'batch_disable_standards', value: 'batch_disable_standards' },
        { label: 'batch_enable_standards', value: 'batch_enable_standards' }
    ]}
>
<TabItem value="batch_disable_standards">

Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Security Standards section of the Security Hub CSPM User Guide.

```sql
EXEC aws.securityhub.standards.batch_disable_standards 
@region='{{ region }}' --required 
@@json=
'{
"StandardsSubscriptionArns": "{{ StandardsSubscriptionArns }}"
}'
;
```
</TabItem>
<TabItem value="batch_enable_standards">

Enables the standards specified by the provided StandardsArn. To obtain the ARN for a standard, use the DescribeStandards operation. For more information, see the Security Standards section of the Security Hub CSPM User Guide.

```sql
EXEC aws.securityhub.standards.batch_enable_standards 
@region='{{ region }}' --required 
@@json=
'{
"StandardsSubscriptionRequests": "{{ StandardsSubscriptionRequests }}"
}'
;
```
</TabItem>
</Tabs>
