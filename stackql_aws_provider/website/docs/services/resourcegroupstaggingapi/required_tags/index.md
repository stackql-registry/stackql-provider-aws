--- 
title: required_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - required_tags
  - resourcegroupstaggingapi
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

Creates, updates, deletes, gets or lists a <code>required_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="required_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resourcegroupstaggingapi.required_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_required_tags"
    values={[
        { label: 'list_required_tags', value: 'list_required_tags' }
    ]}
>
<TabItem value="list_required_tags">

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
    <td><CopyableCode code="CloudFormationResourceTypes" /></td>
    <td><code>array</code></td>
    <td>Describes the CloudFormation resource type assigned the required tag keys.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportingTagKeys" /></td>
    <td><code>array</code></td>
    <td>These tag keys are marked as required in the report_required_tag_for block of the effective tag policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Describes the resource type for the required tag keys.</td>
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
    <td><a href="#list_required_tags"><CopyableCode code="list_required_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the required tags for supported resource types in an Amazon Web Services account.</td>
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
    defaultValue="list_required_tags"
    values={[
        { label: 'list_required_tags', value: 'list_required_tags' }
    ]}
>
<TabItem value="list_required_tags">

Lists the required tags for supported resource types in an Amazon Web Services account.

```sql
SELECT
CloudFormationResourceTypes,
ReportingTagKeys,
ResourceType
FROM aws.resourcegroupstaggingapi.required_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
