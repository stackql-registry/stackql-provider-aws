--- 
title: discovered_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_resources
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

Creates, updates, deletes, gets or lists a <code>discovered_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovered_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.discovered_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_discovered_resources"
    values={[
        { label: 'list_discovered_resources', value: 'list_discovered_resources' }
    ]}
>
<TabItem value="list_discovered_resources">

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
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td>The configurationId in Application Discovery Service that uniquely identifies the on-premise resource. (pattern: &lt;code&gt;^.&#123;1,1600&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference. (pattern: &lt;code&gt;^.&#123;0,500&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_discovered_resources"><CopyableCode code="list_discovered_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists discovered resources associated with the given MigrationTask.</td>
</tr>
<tr>
    <td><a href="#associate_discovered_resource"><CopyableCode code="associate_discovered_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-DiscoveredResource"><code>DiscoveredResource</code></a></td>
    <td></td>
    <td>Associates a discovered resource ID from Application Discovery Service with a migration task.</td>
</tr>
<tr>
    <td><a href="#disassociate_discovered_resource"><CopyableCode code="disassociate_discovered_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-ConfigurationId"><code>ConfigurationId</code></a></td>
    <td></td>
    <td>Disassociate an Application Discovery Service discovered resource from a migration task.</td>
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
    defaultValue="list_discovered_resources"
    values={[
        { label: 'list_discovered_resources', value: 'list_discovered_resources' }
    ]}
>
<TabItem value="list_discovered_resources">

Lists discovered resources associated with the given MigrationTask.

```sql
SELECT
configuration_id,
description
FROM aws.mgh.discovered_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_discovered_resource"
    values={[
        { label: 'associate_discovered_resource', value: 'associate_discovered_resource' },
        { label: 'disassociate_discovered_resource', value: 'disassociate_discovered_resource' }
    ]}
>
<TabItem value="associate_discovered_resource">

Associates a discovered resource ID from Application Discovery Service with a migration task.

```sql
UPDATE aws.mgh.discovered_resources
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
DiscoveredResource = '{{ DiscoveredResource }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND DiscoveredResource = '{{ DiscoveredResource }}' --required;
```
</TabItem>
<TabItem value="disassociate_discovered_resource">

Disassociate an Application Discovery Service discovered resource from a migration task.

```sql
UPDATE aws.mgh.discovered_resources
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
ConfigurationId = '{{ ConfigurationId }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND ConfigurationId = '{{ ConfigurationId }}' --required;
```
</TabItem>
</Tabs>
