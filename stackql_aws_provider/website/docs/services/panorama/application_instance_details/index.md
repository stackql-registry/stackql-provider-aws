--- 
title: application_instance_details
hide_title: false
hide_table_of_contents: false
keywords:
  - application_instance_details
  - panorama
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

Creates, updates, deletes, gets or lists an <code>application_instance_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_instance_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.application_instance_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_instance_details"
    values={[
        { label: 'describe_application_instance_details', value: 'describe_application_instance_details' }
    ]}
>
<TabItem value="describe_application_instance_details">

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
    <td><CopyableCode code="ApplicationInstanceId" /></td>
    <td><code>string</code></td>
    <td>The application instance's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationInstanceIdToReplace" /></td>
    <td><code>string</code></td>
    <td>The ID of the application instance that this instance replaced. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the application instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultRuntimeContextDevice" /></td>
    <td><code>string</code></td>
    <td>The application instance's default runtime context device. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The application instance's description. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestOverridesPayload" /></td>
    <td><code>object</code></td>
    <td>Parameter overrides for an application instance. This is a JSON document that has a single key (PayloadData) where the value is an escaped string representation of the overrides document.</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestPayload" /></td>
    <td><code>object</code></td>
    <td>A application verion's manifest file. This is a JSON document that has a single key (PayloadData) where the value is an escaped string representation of the application manifest (graph.json). This file is located in the graphs folder in your application source.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The application instance's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_application_instance_details"><CopyableCode code="describe_application_instance_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_instance_id"><code>application_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an application instance's configuration manifest.</td>
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
<tr id="parameter-application_instance_id">
    <td><CopyableCode code="application_instance_id" /></td>
    <td><code>string</code></td>
    <td>The application instance's ID.</td>
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
    defaultValue="describe_application_instance_details"
    values={[
        { label: 'describe_application_instance_details', value: 'describe_application_instance_details' }
    ]}
>
<TabItem value="describe_application_instance_details">

Returns information about an application instance's configuration manifest.

```sql
SELECT
ApplicationInstanceId,
ApplicationInstanceIdToReplace,
CreatedTime,
DefaultRuntimeContextDevice,
Description,
ManifestOverridesPayload,
ManifestPayload,
Name
FROM aws.panorama.application_instance_details
WHERE application_instance_id = '{{ application_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
