--- 
title: decoder_manifest_signals
hide_title: false
hide_table_of_contents: false
keywords:
  - decoder_manifest_signals
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>decoder_manifest_signals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decoder_manifest_signals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.decoder_manifest_signals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_decoder_manifest_signals"
    values={[
        { label: 'list_decoder_manifest_signals', value: 'list_decoder_manifest_signals' }
    ]}
>
<TabItem value="list_decoder_manifest_signals">

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
    <td><CopyableCode code="canSignal" /></td>
    <td><code>object</code></td>
    <td>Information about signal decoder using the Controller Area Network (CAN) protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="customDecodingSignal" /></td>
    <td><code>object</code></td>
    <td>Information about a custom signal decoder. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="fullyQualifiedName" /></td>
    <td><code>string</code></td>
    <td>The fully qualified name of a signal decoder as defined in a vehicle model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of a network interface that specifies what network protocol a vehicle follows. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="messageSignal" /></td>
    <td><code>object</code></td>
    <td>The decoding information for a specific message which supports higher order data types.</td>
</tr>
<tr>
    <td><CopyableCode code="obdSignal" /></td>
    <td><code>object</code></td>
    <td>Information about signal decoder using the on-board diagnostic (OBD) II protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The network protocol for the vehicle. For example, CAN_SIGNAL specifies a protocol that defines how data is communicated between electronic control units (ECUs). OBD_SIGNAL specifies a protocol that defines how self-diagnostic data is communicated between ECUs. (CAN_SIGNAL, OBD_SIGNAL, MESSAGE_SIGNAL, CUSTOM_DECODING_SIGNAL)</td>
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
    <td><a href="#list_decoder_manifest_signals"><CopyableCode code="list_decoder_manifest_signals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list of information about signal decoders specified in a decoder manifest. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
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
    defaultValue="list_decoder_manifest_signals"
    values={[
        { label: 'list_decoder_manifest_signals', value: 'list_decoder_manifest_signals' }
    ]}
>
<TabItem value="list_decoder_manifest_signals">

A list of information about signal decoders specified in a decoder manifest. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
canSignal,
customDecodingSignal,
fullyQualifiedName,
interfaceId,
messageSignal,
obdSignal,
type_
FROM aws.iotfleetwise.decoder_manifest_signals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
