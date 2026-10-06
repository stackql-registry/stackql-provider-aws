--- 
title: environment_cnam_es
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_cnam_es
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

Creates, updates, deletes, gets or lists an <code>environment_cnam_es</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_cnam_es" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_cnam_es" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#swap_environment_cnam_es"><CopyableCode code="swap_environment_cnam_es" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceEnvironmentId"><code>SourceEnvironmentId</code></a>, <a href="#parameter-SourceEnvironmentName"><code>SourceEnvironmentName</code></a>, <a href="#parameter-DestinationEnvironmentId"><code>DestinationEnvironmentId</code></a>, <a href="#parameter-DestinationEnvironmentName"><code>DestinationEnvironmentName</code></a></td>
    <td>Swaps the CNAMEs of two environments.</td>
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
<tr id="parameter-DestinationEnvironmentId">
    <td><CopyableCode code="DestinationEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the destination environment. Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentId with the DestinationEnvironmentId.</td>
</tr>
<tr id="parameter-DestinationEnvironmentName">
    <td><CopyableCode code="DestinationEnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the destination environment. Condition: You must specify at least the DestinationEnvironmentID or the DestinationEnvironmentName. You may also specify both. You must specify the SourceEnvironmentName with the DestinationEnvironmentName.</td>
</tr>
<tr id="parameter-SourceEnvironmentId">
    <td><CopyableCode code="SourceEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source environment. Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentId, you must specify the DestinationEnvironmentId.</td>
</tr>
<tr id="parameter-SourceEnvironmentName">
    <td><CopyableCode code="SourceEnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the source environment. Condition: You must specify at least the SourceEnvironmentID or the SourceEnvironmentName. You may also specify both. If you specify the SourceEnvironmentName, you must specify the DestinationEnvironmentName.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="swap_environment_cnam_es"
    values={[
        { label: 'swap_environment_cnam_es', value: 'swap_environment_cnam_es' }
    ]}
>
<TabItem value="swap_environment_cnam_es">

Swaps the CNAMEs of two environments.

```sql
EXEC aws.elasticbeanstalk.environment_cnam_es.swap_environment_cnam_es 
@region='{{ region }}' --required, 
@SourceEnvironmentId='{{ SourceEnvironmentId }}', 
@SourceEnvironmentName='{{ SourceEnvironmentName }}', 
@DestinationEnvironmentId='{{ DestinationEnvironmentId }}', 
@DestinationEnvironmentName='{{ DestinationEnvironmentName }}'
;
```
</TabItem>
</Tabs>
