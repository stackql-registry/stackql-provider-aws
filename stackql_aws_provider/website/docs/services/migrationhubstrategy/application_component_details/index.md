--- 
title: application_component_details
hide_title: false
hide_table_of_contents: false
keywords:
  - application_component_details
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists an <code>application_component_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_component_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.application_component_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_component_details"
    values={[
        { label: 'get_application_component_details', value: 'get_application_component_details' }
    ]}
>
<TabItem value="get_application_component_details">

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
    <td><CopyableCode code="application_component_detail" /></td>
    <td><code>object</code></td>
    <td>Detailed information about an application component.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_applications" /></td>
    <td><code>array</code></td>
    <td>The associated application group as defined in AWS Application Discovery Service.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_server_ids" /></td>
    <td><code>array</code></td>
    <td>A list of the IDs of the servers on which the application component is running.</td>
</tr>
<tr>
    <td><CopyableCode code="more_application_resource" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if the application component belongs to more than one application group.</td>
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
    <td><a href="#get_application_component_details"><CopyableCode code="get_application_component_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_component_id"><code>application_component_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an application component.</td>
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
<tr id="parameter-application_component_id">
    <td><CopyableCode code="application_component_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application component. The ID is unique within an AWS account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application_component_details"
    values={[
        { label: 'get_application_component_details', value: 'get_application_component_details' }
    ]}
>
<TabItem value="get_application_component_details">

Retrieves details about an application component.

```sql
SELECT
application_component_detail,
associated_applications,
associated_server_ids,
more_application_resource
FROM aws.migrationhubstrategy.application_component_details
WHERE application_component_id = '{{ application_component_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
