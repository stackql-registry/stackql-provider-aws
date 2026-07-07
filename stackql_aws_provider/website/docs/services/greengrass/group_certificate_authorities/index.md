--- 
title: group_certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - group_certificate_authorities
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>group_certificate_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_certificate_authorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.group_certificate_authorities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_certificate_authority"
    values={[
        { label: 'get_group_certificate_authority', value: 'get_group_certificate_authority' },
        { label: 'list_group_certificate_authorities', value: 'list_group_certificate_authorities' }
    ]}
>
<TabItem value="get_group_certificate_authority">

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
    <td><CopyableCode code="GroupCertificateAuthorityArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the certificate authority for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupCertificateAuthorityId" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate authority for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="PemEncodedCertificate" /></td>
    <td><code>string</code></td>
    <td>The PEM encoded certificate for the group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_group_certificate_authorities">

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
    <td><CopyableCode code="GroupCertificateAuthorities" /></td>
    <td><code>array</code></td>
    <td>A list of certificate authorities associated with the group.</td>
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
    <td><a href="#get_group_certificate_authority"><CopyableCode code="get_group_certificate_authority" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-certificate_authority_id"><code>certificate_authority_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retreives the CA associated with a group. Returns the public key of the CA.</td>
</tr>
<tr>
    <td><a href="#list_group_certificate_authorities"><CopyableCode code="list_group_certificate_authorities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current CAs for a group.</td>
</tr>
<tr>
    <td><a href="#create_group_certificate_authority"><CopyableCode code="create_group_certificate_authority" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a CA for the group. If a CA already exists, it will rotate the existing CA.</td>
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
<tr id="parameter-certificate_authority_id">
    <td><CopyableCode code="certificate_authority_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate authority.</td>
</tr>
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group_certificate_authority"
    values={[
        { label: 'get_group_certificate_authority', value: 'get_group_certificate_authority' },
        { label: 'list_group_certificate_authorities', value: 'list_group_certificate_authorities' }
    ]}
>
<TabItem value="get_group_certificate_authority">

Retreives the CA associated with a group. Returns the public key of the CA.

```sql
SELECT
GroupCertificateAuthorityArn,
GroupCertificateAuthorityId,
PemEncodedCertificate
FROM aws.greengrass.group_certificate_authorities
WHERE certificate_authority_id = '{{ certificate_authority_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_group_certificate_authorities">

Retrieves the current CAs for a group.

```sql
SELECT
GroupCertificateAuthorities
FROM aws.greengrass.group_certificate_authorities
WHERE group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group_certificate_authority"
    values={[
        { label: 'create_group_certificate_authority', value: 'create_group_certificate_authority' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group_certificate_authority">

Creates a CA for the group. If a CA already exists, it will rotate the existing CA.

```sql
INSERT INTO aws.greengrass.group_certificate_authorities (
group_id,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ group_id }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
GroupCertificateAuthorityArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_certificate_authorities
  props:
    - name: group_id
      value: "{{ group_id }}"
      description: Required parameter for the group_certificate_authorities resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the group_certificate_authorities resource.
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>
