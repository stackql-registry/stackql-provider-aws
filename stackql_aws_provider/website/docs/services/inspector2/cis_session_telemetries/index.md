--- 
title: cis_session_telemetries
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_session_telemetries
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>cis_session_telemetries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_session_telemetries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_session_telemetries" /></td></tr>
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
    <td><a href="#send_cis_session_telemetry"><CopyableCode code="send_cis_session_telemetry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanJobId"><code>scanJobId</code></a>, <a href="#parameter-sessionToken"><code>sessionToken</code></a>, <a href="#parameter-messages"><code>messages</code></a></td>
    <td></td>
    <td>Sends a CIS session telemetry. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="send_cis_session_telemetry"
    values={[
        { label: 'send_cis_session_telemetry', value: 'send_cis_session_telemetry' }
    ]}
>
<TabItem value="send_cis_session_telemetry">

Sends a CIS session telemetry. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.

```sql
EXEC aws.inspector2.cis_session_telemetries.send_cis_session_telemetry 
@region='{{ region }}' --required 
@@json=
'{
"scanJobId": "{{ scanJobId }}", 
"sessionToken": "{{ sessionToken }}", 
"messages": "{{ messages }}"
}'
;
```
</TabItem>
</Tabs>
