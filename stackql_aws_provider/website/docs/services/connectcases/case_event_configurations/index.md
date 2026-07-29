--- 
title: case_event_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - case_event_configurations
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>case_event_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_event_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.case_event_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case_event_configuration"
    values={[
        { label: 'get_case_event_configuration', value: 'get_case_event_configuration' }
    ]}
>
<TabItem value="get_case_event_configuration">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the to broadcast case event data to the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="included_data" /></td>
    <td><code>object</code></td>
    <td>Details of what case and related item data is published through the case event stream.</td>
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
    <td><a href="#get_case_event_configuration"><CopyableCode code="get_case_event_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the case event publishing configuration.</td>
</tr>
<tr>
    <td><a href="#put_case_event_configuration"><CopyableCode code="put_case_event_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventBridge"><code>eventBridge</code></a></td>
    <td></td>
    <td>Adds case event publishing configuration. For a complete list of fields you can add to the event message, see Create case fields in the Amazon Connect Administrator Guide</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
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
    defaultValue="get_case_event_configuration"
    values={[
        { label: 'get_case_event_configuration', value: 'get_case_event_configuration' }
    ]}
>
<TabItem value="get_case_event_configuration">

Returns the case event publishing configuration.

```sql
SELECT
enabled,
included_data
FROM aws.connectcases.case_event_configurations
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_case_event_configuration"
    values={[
        { label: 'put_case_event_configuration', value: 'put_case_event_configuration' }
    ]}
>
<TabItem value="put_case_event_configuration">

Adds case event publishing configuration. For a complete list of fields you can add to the event message, see Create case fields in the Amazon Connect Administrator Guide

```sql
REPLACE aws.connectcases.case_event_configurations
SET 
eventBridge = '{{ eventBridge }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND region = '{{ region }}' --required
AND eventBridge = '{{ eventBridge }}' --required;
```
</TabItem>
</Tabs>
