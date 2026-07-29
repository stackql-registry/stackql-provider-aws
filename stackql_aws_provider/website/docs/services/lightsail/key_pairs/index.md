--- 
title: key_pairs
hide_title: false
hide_table_of_contents: false
keywords:
  - key_pairs
  - lightsail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.key_pairs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key_pair"
    values={[
        { label: 'get_key_pair', value: 'get_key_pair' },
        { label: 'get_key_pairs', value: 'get_key_pairs' }
    ]}
>
<TabItem value="get_key_pair">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the SSH key pair. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the key pair (arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the key pair was created (1479816991.349).</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The RSA fingerprint of the key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where the key pair was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (usually KeyPair). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_key_pairs">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the SSH key pair. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the key pair (arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the key pair was created (1479816991.349).</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The RSA fingerprint of the key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where the key pair was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (usually KeyPair). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
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
    <td><a href="#get_key_pair"><CopyableCode code="get_key_pair" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific key pair.</td>
</tr>
<tr>
    <td><a href="#get_key_pairs"><CopyableCode code="get_key_pairs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all key pairs in the user's account.</td>
</tr>
<tr>
    <td><a href="#create_key_pair"><CopyableCode code="create_key_pair" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyPairName"><code>keyPairName</code></a></td>
    <td></td>
    <td>Creates a custom SSH key pair that you can use with an Amazon Lightsail instance. Use the DownloadDefaultKeyPair action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist. The create key pair operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_key_pair"><CopyableCode code="delete_key_pair" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified key pair by removing the public key from Amazon Lightsail. You can delete key pairs that were created using the ImportKeyPair and CreateKeyPair actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the DownloadDefaultKeyPair API. The delete key pair operation supports tag-based access control via resource tags applied to the resource identified by key pair name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#import_key_pair"><CopyableCode code="import_key_pair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyPairName"><code>keyPairName</code></a>, <a href="#parameter-publicKeyBase64"><code>publicKeyBase64</code></a></td>
    <td></td>
    <td>Imports a public SSH key from a specific key pair.</td>
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
    defaultValue="get_key_pair"
    values={[
        { label: 'get_key_pair', value: 'get_key_pair' },
        { label: 'get_key_pairs', value: 'get_key_pairs' }
    ]}
>
<TabItem value="get_key_pair">

Returns information about a specific key pair.

```sql
SELECT
name,
arn,
created_at,
fingerprint,
location,
resource_type,
support_code,
tags
FROM aws.lightsail.key_pairs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_key_pairs">

Returns information about all key pairs in the user's account.

```sql
SELECT
name,
arn,
created_at,
fingerprint,
location,
resource_type,
support_code,
tags
FROM aws.lightsail.key_pairs
WHERE region = '{{ region }}' -- required
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

Creates a custom SSH key pair that you can use with an Amazon Lightsail instance. Use the DownloadDefaultKeyPair action to create a Lightsail default key pair in an Amazon Web Services Region where a default key pair does not currently exist. The create key pair operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.key_pairs (
keyPairName,
tags,
region
)
SELECT 
'{{ keyPairName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
key_pair,
operation,
private_key_base_64,
public_key_base_64
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_pairs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the key_pairs resource.
    - name: keyPairName
      value: "{{ keyPairName }}"
      description: |
        The name for your new key pair.
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
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

Deletes the specified key pair by removing the public key from Amazon Lightsail. You can delete key pairs that were created using the ImportKeyPair and CreateKeyPair actions, as well as the Lightsail default key pair. A new default key pair will not be created unless you launch an instance without specifying a custom key pair, or you call the DownloadDefaultKeyPair API. The delete key pair operation supports tag-based access control via resource tags applied to the resource identified by key pair name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.key_pairs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_key_pair"
    values={[
        { label: 'import_key_pair', value: 'import_key_pair' }
    ]}
>
<TabItem value="import_key_pair">

Imports a public SSH key from a specific key pair.

```sql
EXEC aws.lightsail.key_pairs.import_key_pair 
@region='{{ region }}' --required 
@@json=
'{
"keyPairName": "{{ keyPairName }}", 
"publicKeyBase64": "{{ publicKeyBase64 }}"
}'
;
```
</TabItem>
</Tabs>
