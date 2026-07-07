--- 
title: luna_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - luna_clients
  - cloudhsm
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

Creates, updates, deletes, gets or lists a <code>luna_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="luna_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsm.luna_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_luna_client"
    values={[
        { label: 'describe_luna_client', value: 'describe_luna_client' }
    ]}
>
<TabItem value="describe_luna_client">

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
    <td><CopyableCode code="Certificate" /></td>
    <td><code>string</code></td>
    <td>The certificate installed on the HSMs used by this client. (pattern: &lt;code&gt;&#91;\w :+=./\n-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateFingerprint" /></td>
    <td><code>string</code></td>
    <td>The certificate fingerprint. (pattern: &lt;code&gt;(&#91;0-9a-fA-F&#93;&#91;0-9a-fA-F&#93;:)&#123;15&#125;&#91;0-9a-fA-F&#93;&#91;0-9a-fA-F&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClientArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the client. (pattern: &lt;code&gt;arn:aws(-iso)?:cloudhsm:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:client-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Label" /></td>
    <td><code>string</code></td>
    <td>The label of the client. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time the client was last modified. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
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
    <td><a href="#describe_luna_client"><CopyableCode code="describe_luna_client" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM client.</td>
</tr>
<tr>
    <td><a href="#create_luna_client"><CopyableCode code="create_luna_client" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an HSM client.</td>
</tr>
<tr>
    <td><a href="#modify_luna_client"><CopyableCode code="modify_luna_client" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientArn"><code>ClientArn</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies the certificate used by the client. This action can potentially start a workflow to install the new certificate on the client's HSMs.</td>
</tr>
<tr>
    <td><a href="#delete_luna_client"><CopyableCode code="delete_luna_client" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a client.</td>
</tr>
<tr>
    <td><a href="#list_luna_clients"><CopyableCode code="list_luna_clients" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists all of the clients. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListLunaClients to retrieve the next set of items.</td>
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
    defaultValue="describe_luna_client"
    values={[
        { label: 'describe_luna_client', value: 'describe_luna_client' }
    ]}
>
<TabItem value="describe_luna_client">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM client.

```sql
SELECT
Certificate,
CertificateFingerprint,
ClientArn,
Label,
LastModifiedTimestamp
FROM aws.cloudhsm.luna_clients
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_luna_client"
    values={[
        { label: 'create_luna_client', value: 'create_luna_client' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_luna_client">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an HSM client.

```sql
INSERT INTO aws.cloudhsm.luna_clients (
Label,
Certificate,
region
)
SELECT 
'{{ Label }}',
'{{ Certificate }}',
'{{ region }}'
RETURNING
ClientArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: luna_clients
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the luna_clients resource.
    - name: Label
      value: "{{ Label }}"
      description: |
        The label for the client.
    - name: Certificate
      value: "{{ Certificate }}"
      description: |
        The contents of a Base64-Encoded X.509 v3 certificate to be installed on the HSMs used by this client.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_luna_client"
    values={[
        { label: 'modify_luna_client', value: 'modify_luna_client' }
    ]}
>
<TabItem value="modify_luna_client">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies the certificate used by the client. This action can potentially start a workflow to install the new certificate on the client's HSMs.

```sql
UPDATE aws.cloudhsm.luna_clients
SET 
ClientArn = '{{ ClientArn }}',
Certificate = '{{ Certificate }}'
WHERE 
region = '{{ region }}' --required
AND ClientArn = '{{ ClientArn }}' --required
RETURNING
ClientArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_luna_client"
    values={[
        { label: 'delete_luna_client', value: 'delete_luna_client' }
    ]}
>
<TabItem value="delete_luna_client">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes a client.

```sql
DELETE FROM aws.cloudhsm.luna_clients
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_luna_clients"
    values={[
        { label: 'list_luna_clients', value: 'list_luna_clients' }
    ]}
>
<TabItem value="list_luna_clients">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Lists all of the clients. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListLunaClients to retrieve the next set of items.

```sql
EXEC aws.cloudhsm.luna_clients.list_luna_clients 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
