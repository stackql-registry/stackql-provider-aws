--- 
title: key_pairs
hide_title: false
hide_table_of_contents: false
keywords:
  - key_pairs
  - ec2
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

Creates, updates, deletes, gets or lists a <code>key_pairs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_pairs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.key_pairs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key_pairs"
    values={[
        { label: 'describe_key_pairs', value: 'describe_key_pairs' }
    ]}
>
<TabItem value="describe_key_pairs">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>If you used Amazon EC2 to create the key pair, this is the date and time when the key was created, in ISO 8601 date-time format, in the UTC time zone. If you imported an existing key pair to Amazon EC2, this is the date and time the key was imported, in ISO 8601 date-time format, in the UTC time zone.</td>
</tr>
<tr>
    <td><CopyableCode code="key_fingerprint" /></td>
    <td><code>string</code></td>
    <td>If you used CreateKeyPair to create the key pair: For RSA key pairs, the key fingerprint is the SHA-1 digest of the DER encoded private key. For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8. If you used ImportKeyPair to provide Amazon Web Services the public key: For RSA key pairs, the key fingerprint is the MD5 public key fingerprint as specified in section 4 of RFC4716. For ED25519 key pairs, the key fingerprint is the base64-encoded SHA-256 digest, which is the default for OpenSSH, starting with OpenSSH 6.8.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="key_pair_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="key_type" /></td>
    <td><code>string</code></td>
    <td>The type of key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>The public key material.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags applied to the key pair.</td>
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
    <td><a href="#describe_key_pairs"><CopyableCode code="describe_key_pairs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KeyName"><code>KeyName</code></a>, <a href="#parameter-KeyPairId"><code>KeyPairId</code></a>, <a href="#parameter-IncludePublicKey"><code>IncludePublicKey</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified key pairs or all of your key pairs. For more information about key pairs, see Amazon EC2 key pairs in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_key_pair"><CopyableCode code="create_key_pair" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-KeyName"><code>KeyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KeyType"><code>KeyType</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-KeyFormat"><code>KeyFormat</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an ED25519 or 2048-bit RSA key pair with the specified name and in the specified format. Amazon EC2 stores the public key and displays the private key for you to save to a file. The private key is returned as an unencrypted PEM encoded PKCS#1 private key or an unencrypted PPK formatted private key for use with PuTTY. If a key with the specified name already exists, Amazon EC2 returns an error. The key pair returned to you is available only in the Amazon Web Services Region in which you create it. If you prefer, you can create your own key pair using a third-party tool and upload it to any Region using ImportKeyPair. You can have up to 5,000 key pairs per Amazon Web Services Region. For more information, see Amazon EC2 key pairs in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_key_pair"><CopyableCode code="delete_key_pair" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KeyName"><code>KeyName</code></a>, <a href="#parameter-KeyPairId"><code>KeyPairId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified key pair, by removing the public key from Amazon EC2.</td>
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
<tr id="parameter-KeyName">
    <td><CopyableCode code="KeyName" /></td>
    <td><code>string</code></td>
    <td>A unique name for the key pair. Constraints: Up to 255 ASCII characters</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. key-pair-id - The ID of the key pair. fingerprint - The fingerprint of the key pair. key-name - The name of the key pair. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
<tr id="parameter-IncludePublicKey">
    <td><CopyableCode code="IncludePublicKey" /></td>
    <td><code>boolean</code></td>
    <td>If true, the public key material is included in the response. Default: false</td>
</tr>
<tr id="parameter-KeyFormat">
    <td><CopyableCode code="KeyFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the key pair. Default: pem</td>
</tr>
<tr id="parameter-KeyName">
    <td><CopyableCode code="KeyName" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair.</td>
</tr>
<tr id="parameter-KeyPairId">
    <td><CopyableCode code="KeyPairId" /></td>
    <td><code>string</code></td>
    <td>The ID of the key pair.</td>
</tr>
<tr id="parameter-KeyType">
    <td><CopyableCode code="KeyType" /></td>
    <td><code>string</code></td>
    <td>The type of key pair. Note that ED25519 keys are not supported for Windows instances. Default: rsa</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the new key pair.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_key_pairs"
    values={[
        { label: 'describe_key_pairs', value: 'describe_key_pairs' }
    ]}
>
<TabItem value="describe_key_pairs">

Describes the specified key pairs or all of your key pairs. For more information about key pairs, see Amazon EC2 key pairs in the Amazon EC2 User Guide.

```sql
SELECT
create_time,
key_fingerprint,
key_name,
key_pair_id,
key_type,
public_key,
tags
FROM aws.ec2.key_pairs
WHERE region = '{{ region }}' -- required
AND KeyName = '{{ KeyName }}'
AND KeyPairId = '{{ KeyPairId }}'
AND IncludePublicKey = '{{ IncludePublicKey }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key_pair"
    values={[
        { label: 'create_key_pair', value: 'create_key_pair' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key_pair">

Creates an ED25519 or 2048-bit RSA key pair with the specified name and in the specified format. Amazon EC2 stores the public key and displays the private key for you to save to a file. The private key is returned as an unencrypted PEM encoded PKCS#1 private key or an unencrypted PPK formatted private key for use with PuTTY. If a key with the specified name already exists, Amazon EC2 returns an error. The key pair returned to you is available only in the Amazon Web Services Region in which you create it. If you prefer, you can create your own key pair using a third-party tool and upload it to any Region using ImportKeyPair. You can have up to 5,000 key pairs per Amazon Web Services Region. For more information, see Amazon EC2 key pairs in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.key_pairs (
KeyName,
region,
KeyType,
TagSpecification,
KeyFormat,
DryRun
)
SELECT 
'{{ KeyName }}',
'{{ region }}',
'{{ KeyType }}',
'{{ TagSpecification }}',
'{{ KeyFormat }}',
'{{ DryRun }}'
RETURNING
key_fingerprint,
key_material,
key_name,
key_pair_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_pairs
  props:
    - name: KeyName
      value: "{{ KeyName }}"
      description: Required parameter for the key_pairs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the key_pairs resource.
    - name: KeyType
      value: "{{ KeyType }}"
      description: The type of key pair. Note that ED25519 keys are not supported for Windows instances. Default: rsa
      description: The type of key pair. Note that ED25519 keys are not supported for Windows instances. Default: rsa
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the new key pair.
      description: The tags to apply to the new key pair.
    - name: KeyFormat
      value: "{{ KeyFormat }}"
      description: The format of the key pair. Default: pem
      description: The format of the key pair. Default: pem
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key_pair"
    values={[
        { label: 'delete_key_pair', value: 'delete_key_pair' }
    ]}
>
<TabItem value="delete_key_pair">

Deletes the specified key pair, by removing the public key from Amazon EC2.

```sql
DELETE FROM aws.ec2.key_pairs
WHERE region = '{{ region }}' --required
AND KeyName = '{{ KeyName }}'
AND KeyPairId = '{{ KeyPairId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
