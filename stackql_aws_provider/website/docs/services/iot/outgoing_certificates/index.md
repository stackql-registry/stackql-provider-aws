--- 
title: outgoing_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - outgoing_certificates
  - iot
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

Creates, updates, deletes, gets or lists an <code>outgoing_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outgoing_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.outgoing_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_outgoing_certificates"
    values={[
        { label: 'list_outgoing_certificates', value: 'list_outgoing_certificates' }
    ]}
>
<TabItem value="list_outgoing_certificates">

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
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The certificate ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string</code></td>
    <td>The certificate ID. (pattern: &lt;code&gt;(0x)?&#91;a-fA-F0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The certificate creation date.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the transfer was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_message" /></td>
    <td><code>string</code></td>
    <td>The transfer message. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transferred_to" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account to which the transfer was made. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_outgoing_certificates"><CopyableCode code="list_outgoing_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists certificates that are being transferred but not yet accepted. Requires permission to access the ListOutgoingCertificates action.</td>
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
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The result page size.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_outgoing_certificates"
    values={[
        { label: 'list_outgoing_certificates', value: 'list_outgoing_certificates' }
    ]}
>
<TabItem value="list_outgoing_certificates">

Lists certificates that are being transferred but not yet accepted. Requires permission to access the ListOutgoingCertificates action.

```sql
SELECT
certificate_arn,
certificate_id,
creation_date,
transfer_date,
transfer_message,
transferred_to
FROM aws.iot.outgoing_certificates
WHERE region = '{{ region }}' -- required
AND pageSize = '{{ pageSize }}'
AND marker = '{{ marker }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>
