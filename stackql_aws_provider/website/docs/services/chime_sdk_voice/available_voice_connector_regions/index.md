--- 
title: available_voice_connector_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - available_voice_connector_regions
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists an <code>available_voice_connector_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_voice_connector_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.available_voice_connector_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_available_voice_connector_regions"
    values={[
        { label: 'list_available_voice_connector_regions', value: 'list_available_voice_connector_regions' }
    ]}
>
<TabItem value="list_available_voice_connector_regions">

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
    <td><CopyableCode code="voice_connector_region" /></td>
    <td><code>string</code></td>
    <td>The list of AWS Regions.</td>
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
    <td><a href="#list_available_voice_connector_regions"><CopyableCode code="list_available_voice_connector_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.</td>
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
    defaultValue="list_available_voice_connector_regions"
    values={[
        { label: 'list_available_voice_connector_regions', value: 'list_available_voice_connector_regions' }
    ]}
>
<TabItem value="list_available_voice_connector_regions">

Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.

```sql
SELECT
voice_connector_region
FROM aws.chime_sdk_voice.available_voice_connector_regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
