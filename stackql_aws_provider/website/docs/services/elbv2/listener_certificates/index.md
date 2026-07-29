--- 
title: listener_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - listener_certificates
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>listener_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listener_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.listener_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_listener_certificates"
    values={[
        { label: 'describe_listener_certificates', value: 'describe_listener_certificates' }
    ]}
>
<TabItem value="describe_listener_certificates">

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
    <td>The Amazon Resource Name (ARN) of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.</td>
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
    <td><a href="#describe_listener_certificates"><CopyableCode code="describe_listener_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener. If the default certificate is also in the certificate list, it appears twice in the results (once with IsDefault set to true and once with IsDefault set to false). For more information, see SSL certificates in the Application Load Balancers Guide or Server certificates in the Network Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#add_listener_certificates"><CopyableCode code="add_listener_certificates" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Certificates"><code>Certificates</code></a></td>
    <td>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener. If the certificate in already in the certificate list, the call is successful but the certificate is not added again. For more information, see SSL certificates in the Application Load Balancers Guide or Server certificates in the Network Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#remove_listener_certificates"><CopyableCode code="remove_listener_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Certificates"><code>Certificates</code></a></td>
    <td>Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.</td>
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
<tr id="parameter-ListenerArn">
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Certificates">
    <td><CopyableCode code="Certificates" /></td>
    <td><code>array</code></td>
    <td>The certificate to remove. You can specify one certificate per call. Set CertificateArn to the certificate ARN but do not set IsDefault.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_listener_certificates"
    values={[
        { label: 'describe_listener_certificates', value: 'describe_listener_certificates' }
    ]}
>
<TabItem value="describe_listener_certificates">

Describes the default certificate and the certificate list for the specified HTTPS or TLS listener. If the default certificate is also in the certificate list, it appears twice in the results (once with IsDefault set to true and once with IsDefault set to false). For more information, see SSL certificates in the Application Load Balancers Guide or Server certificates in the Network Load Balancers Guide.

```sql
SELECT
certificate_arn,
is_default
FROM aws.elbv2.listener_certificates
WHERE ListenerArn = '{{ ListenerArn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_listener_certificates"
    values={[
        { label: 'add_listener_certificates', value: 'add_listener_certificates' }
    ]}
>
<TabItem value="add_listener_certificates">

Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener. If the certificate in already in the certificate list, the call is successful but the certificate is not added again. For more information, see SSL certificates in the Application Load Balancers Guide or Server certificates in the Network Load Balancers Guide.

```sql
UPDATE aws.elbv2.listener_certificates
SET 
-- No updatable properties
WHERE 
ListenerArn = '{{ ListenerArn }}' --required
AND region = '{{ region }}' --required
AND Certificates = '{{ Certificates}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_listener_certificates"
    values={[
        { label: 'remove_listener_certificates', value: 'remove_listener_certificates' }
    ]}
>
<TabItem value="remove_listener_certificates">

Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.

```sql
EXEC aws.elbv2.listener_certificates.remove_listener_certificates 
@ListenerArn='{{ ListenerArn }}' --required, 
@region='{{ region }}' --required, 
@Certificates='{{ Certificates }}'
;
```
</TabItem>
</Tabs>
