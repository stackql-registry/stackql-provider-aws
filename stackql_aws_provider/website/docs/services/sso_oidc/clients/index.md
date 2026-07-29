--- 
title: clients
hide_title: false
hide_table_of_contents: false
keywords:
  - clients
  - sso_oidc
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

Creates, updates, deletes, gets or lists a <code>clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_oidc.clients" /></td></tr>
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
    <td><a href="#register_client"><CopyableCode code="register_client" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientName"><code>clientName</code></a>, <a href="#parameter-clientType"><code>clientType</code></a></td>
    <td></td>
    <td>Registers a public client with IAM Identity Center. This allows clients to perform authorization using the authorization code grant with Proof Key for Code Exchange (PKCE) or the device code grant.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="register_client"
    values={[
        { label: 'register_client', value: 'register_client' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_client">

Registers a public client with IAM Identity Center. This allows clients to perform authorization using the authorization code grant with Proof Key for Code Exchange (PKCE) or the device code grant.

```sql
INSERT INTO aws.sso_oidc.clients (
clientName,
clientType,
scopes,
redirectUris,
grantTypes,
issuerUrl,
entitledApplicationArn,
region
)
SELECT 
'{{ clientName }}' /* required */,
'{{ clientType }}' /* required */,
'{{ scopes }}',
'{{ redirectUris }}',
'{{ grantTypes }}',
'{{ issuerUrl }}',
'{{ entitledApplicationArn }}',
'{{ region }}'
RETURNING
authorization_endpoint,
client_id,
client_id_issued_at,
client_secret,
client_secret_expires_at,
token_endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clients
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clients resource.
    - name: clientName
      value: "{{ clientName }}"
    - name: clientType
      value: "{{ clientType }}"
    - name: scopes
      value:
        - "{{ scopes }}"
    - name: redirectUris
      value:
        - "{{ redirectUris }}"
    - name: grantTypes
      value:
        - "{{ grantTypes }}"
    - name: issuerUrl
      value: "{{ issuerUrl }}"
    - name: entitledApplicationArn
      value: "{{ entitledApplicationArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>
