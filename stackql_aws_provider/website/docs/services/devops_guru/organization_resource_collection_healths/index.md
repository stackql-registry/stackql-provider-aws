--- 
title: organization_resource_collection_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_resource_collection_healths
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>organization_resource_collection_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_resource_collection_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.organization_resource_collection_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_resource_collection_health"
    values={[
        { label: 'describe_organization_resource_collection_health', value: 'describe_organization_resource_collection_health' }
    ]}
>
<TabItem value="describe_organization_resource_collection_health">

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
    <td><CopyableCode code="AnalyzedResourceCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services CloudFormation stack.</td>
</tr>
<tr>
    <td><CopyableCode code="Insight" /></td>
    <td><code>object</code></td>
    <td>Information about the health of the Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack, including the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.</td>
</tr>
<tr>
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name of the CloudFormation stack. (pattern: &lt;code&gt;^&#91;a-zA-Z*&#93;+&#91;a-zA-Z0-9-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_organization_resource_collection_health"><CopyableCode code="describe_organization_resource_collection_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.</td>
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
    defaultValue="describe_organization_resource_collection_health"
    values={[
        { label: 'describe_organization_resource_collection_health', value: 'describe_organization_resource_collection_health' }
    ]}
>
<TabItem value="describe_organization_resource_collection_health">

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the AccountIds field.

```sql
SELECT
AnalyzedResourceCount,
Insight,
StackName
FROM aws.devops_guru.organization_resource_collection_healths
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
