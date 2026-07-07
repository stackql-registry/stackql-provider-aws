--- 
title: service_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - service_endpoints
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>service_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.service_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_endpoint"
    values={[
        { label: 'get_service_endpoint', value: 'get_service_endpoint' }
    ]}
>
<TabItem value="get_service_endpoint">

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
    <td><CopyableCode code="ServerTrust" /></td>
    <td><code>string</code></td>
    <td>The Root CA of the server trust certificate. (pattern: &lt;code&gt;&#91;^-A-Za-z0-9+/=&#93;|=&#91;^=&#93;|=&#123;3,&#125;$&#123;1,4096&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceEndpoint" /></td>
    <td><code>string</code></td>
    <td>The service endpoint value.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceType" /></td>
    <td><code>string</code></td>
    <td>The endpoint's service type. (CUPS, LNS)</td>
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
    <td><a href="#get_service_endpoint"><CopyableCode code="get_service_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.</td>
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
<tr id="parameter-serviceType">
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The service type for which to get endpoint information about. Can be CUPS for the Configuration and Update Server endpoint, or LNS for the LoRaWAN Network Server endpoint.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_endpoint"
    values={[
        { label: 'get_service_endpoint', value: 'get_service_endpoint' }
    ]}
>
<TabItem value="get_service_endpoint">

Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.

```sql
SELECT
ServerTrust,
ServiceEndpoint,
ServiceType
FROM aws.iotwireless.service_endpoints
WHERE region = '{{ region }}' -- required
AND serviceType = '{{ serviceType }}'
;
```
</TabItem>
</Tabs>
