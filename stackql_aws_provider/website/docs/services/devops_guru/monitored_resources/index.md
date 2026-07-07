--- 
title: monitored_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - monitored_resources
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

Creates, updates, deletes, gets or lists a <code>monitored_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitored_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.monitored_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_monitored_resources"
    values={[
        { label: 'list_monitored_resources', value: 'list_monitored_resources' }
    ]}
>
<TabItem value="list_monitored_resources">

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
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which DevOps Guru last updated this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoredResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource being monitored. (pattern: &lt;code&gt;&#91;\.\-_\/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceCollection" /></td>
    <td><code>object</code></td>
    <td>A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourcePermission" /></td>
    <td><code>string</code></td>
    <td>The permission status of a resource. (FULL_PERMISSION, MISSING_PERMISSION)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of resource being monitored. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+&#91;a-zA-Z0-9-_:&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#list_monitored_resources"><CopyableCode code="list_monitored_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of all log groups that are being monitored and tagged by DevOps Guru.</td>
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
    defaultValue="list_monitored_resources"
    values={[
        { label: 'list_monitored_resources', value: 'list_monitored_resources' }
    ]}
>
<TabItem value="list_monitored_resources">

Returns the list of all log groups that are being monitored and tagged by DevOps Guru.

```sql
SELECT
LastUpdated,
MonitoredResourceName,
ResourceCollection,
ResourcePermission,
Type
FROM aws.devops_guru.monitored_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
