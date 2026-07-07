--- 
title: thing_principals
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_principals
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

Creates, updates, deletes, gets or lists a <code>thing_principals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_principals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_principals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_thing_principals"
    values={[
        { label: 'list_thing_principals', value: 'list_thing_principals' }
    ]}
>
<TabItem value="list_thing_principals">

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
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The principals associated with the thing.</td>
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
    <td><a href="#list_thing_principals"><CopyableCode code="list_thing_principals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. Requires permission to access the ListThingPrincipals action.</td>
</tr>
<tr>
    <td><a href="#attach_thing_principal"><CopyableCode code="attach_thing_principal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-x-amzn-principal"><code>x-amzn-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-thingPrincipalType"><code>thingPrincipalType</code></a></td>
    <td>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities. Requires permission to access the AttachThingPrincipal action.</td>
</tr>
<tr>
    <td><a href="#detach_thing_principal"><CopyableCode code="detach_thing_principal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-x-amzn-principal"><code>x-amzn-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. This call is asynchronous. It might take several seconds for the detachment to propagate. Requires permission to access the DetachThingPrincipal action.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing.</td>
</tr>
<tr id="parameter-x-amzn-principal">
    <td><CopyableCode code="x-amzn-principal" /></td>
    <td><code>string</code></td>
    <td>If the principal is a certificate, this value must be ARN of the certificate. If the principal is an Amazon Cognito identity, this value must be the ID of the Amazon Cognito identity.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-thingPrincipalType">
    <td><CopyableCode code="thingPrincipalType" /></td>
    <td><code>string</code></td>
    <td>The type of the relation you want to specify when you attach a principal to a thing. EXCLUSIVE_THING - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal. NON_EXCLUSIVE_THING - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_thing_principals"
    values={[
        { label: 'list_thing_principals', value: 'list_thing_principals' }
    ]}
>
<TabItem value="list_thing_principals">

Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. Requires permission to access the ListThingPrincipals action.

```sql
SELECT
principal
FROM aws.iot.thing_principals
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_thing_principal"
    values={[
        { label: 'attach_thing_principal', value: 'attach_thing_principal' }
    ]}
>
<TabItem value="attach_thing_principal">

Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities. Requires permission to access the AttachThingPrincipal action.

```sql
UPDATE aws.iot.thing_principals
SET 
-- No updatable properties
WHERE 
thing_name = '{{ thing_name }}' --required
AND `x-amzn-principal` = '{{ x-amzn-principal }}' --required
AND region = '{{ region }}' --required
AND thingPrincipalType = '{{ thingPrincipalType}}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_thing_principal"
    values={[
        { label: 'detach_thing_principal', value: 'detach_thing_principal' }
    ]}
>
<TabItem value="detach_thing_principal">

Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. This call is asynchronous. It might take several seconds for the detachment to propagate. Requires permission to access the DetachThingPrincipal action.

```sql
EXEC aws.iot.thing_principals.detach_thing_principal 
@thing_name='{{ thing_name }}' --required, 
@x-amzn-principal='{{ x-amzn-principal }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
