--- 
title: source_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - source_resources
  - mgh
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

Creates, updates, deletes, gets or lists a <code>source_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.source_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_source_resources"
    values={[
        { label: 'list_source_resources', value: 'list_source_resources' }
    ]}
>
<TabItem value="list_source_resources">

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
    <td>A description that can be free-form text to record additional detail about the resource for clarity or later reference. (pattern: &lt;code&gt;^.&#123;0,500&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This is the name that you want to use to identify the resource. If the resource is an AWS resource, we recommend that you set this parameter to the ARN of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="status_detail" /></td>
    <td><code>string</code></td>
    <td>A free-form description of the status of the resource. (pattern: &lt;code&gt;^.&#123;0,2500&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_source_resources"><CopyableCode code="list_source_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the source resource that are associated with the specified MigrationTaskName and ProgressUpdateStream.</td>
</tr>
<tr>
    <td><a href="#associate_source_resource"><CopyableCode code="associate_source_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-SourceResource"><code>SourceResource</code></a></td>
    <td></td>
    <td>Associates a source resource with a migration task. For example, the source resource can be a source server, an application, or a migration wave.</td>
</tr>
<tr>
    <td><a href="#disassociate_source_resource"><CopyableCode code="disassociate_source_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-SourceResourceName"><code>SourceResourceName</code></a></td>
    <td></td>
    <td>Removes the association between a source resource and a migration task.</td>
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
    defaultValue="list_source_resources"
    values={[
        { label: 'list_source_resources', value: 'list_source_resources' }
    ]}
>
<TabItem value="list_source_resources">

Lists all the source resource that are associated with the specified MigrationTaskName and ProgressUpdateStream.

```sql
SELECT
description,
name,
status_detail
FROM aws.mgh.source_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_source_resource"
    values={[
        { label: 'associate_source_resource', value: 'associate_source_resource' },
        { label: 'disassociate_source_resource', value: 'disassociate_source_resource' }
    ]}
>
<TabItem value="associate_source_resource">

Associates a source resource with a migration task. For example, the source resource can be a source server, an application, or a migration wave.

```sql
UPDATE aws.mgh.source_resources
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
SourceResource = '{{ SourceResource }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND SourceResource = '{{ SourceResource }}' --required;
```
</TabItem>
<TabItem value="disassociate_source_resource">

Removes the association between a source resource and a migration task.

```sql
UPDATE aws.mgh.source_resources
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
SourceResourceName = '{{ SourceResourceName }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND SourceResourceName = '{{ SourceResourceName }}' --required;
```
</TabItem>
</Tabs>
