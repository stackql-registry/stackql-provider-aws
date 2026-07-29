--- 
title: kms_encryption_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - kms_encryption_keys
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>kms_encryption_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kms_encryption_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.kms_encryption_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kms_encryption_key"
    values={[
        { label: 'get_kms_encryption_key', value: 'get_kms_encryption_key' }
    ]}
>
<TabItem value="get_kms_encryption_key">

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
    <td><CopyableCode code="kms_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The encryption key ARN. (pattern: &lt;code&gt;^DEFAULT|arn:&#91;a-zA-Z0-9-&#93;+:kms:&#91;a-zA-Z0-9-&#93;+:\d&#123;12&#125;:key\/\w&#123;8&#125;-\w&#123;4&#125;-\w&#123;4&#125;-\w&#123;4&#125;-\w&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_kms_encryption_key"><CopyableCode code="get_kms_encryption_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.</td>
</tr>
<tr>
    <td><a href="#put_kms_encryption_key"><CopyableCode code="put_kms_encryption_key" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kmsEncryptionKeyArn"><code>kmsEncryptionKeyArn</code></a></td>
    <td></td>
    <td>Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.</td>
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
    defaultValue="get_kms_encryption_key"
    values={[
        { label: 'get_kms_encryption_key', value: 'get_kms_encryption_key' }
    ]}
>
<TabItem value="get_kms_encryption_key">

Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.

```sql
SELECT
kms_encryption_key_arn
FROM aws.frauddetector.kms_encryption_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_kms_encryption_key"
    values={[
        { label: 'put_kms_encryption_key', value: 'put_kms_encryption_key' }
    ]}
>
<TabItem value="put_kms_encryption_key">

Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.

```sql
REPLACE aws.frauddetector.kms_encryption_keys
SET 
kmsEncryptionKeyArn = '{{ kmsEncryptionKeyArn }}'
WHERE 
region = '{{ region }}' --required
AND kmsEncryptionKeyArn = '{{ kmsEncryptionKeyArn }}' --required;
```
</TabItem>
</Tabs>
