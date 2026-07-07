--- 
title: signing_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - signing_configurations
  - ecr
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

Creates, updates, deletes, gets or lists a <code>signing_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signing_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.signing_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signing_configuration"
    values={[
        { label: 'get_signing_configuration', value: 'get_signing_configuration' }
    ]}
>
<TabItem value="get_signing_configuration">

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
    <td><CopyableCode code="registryId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the registry. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="signingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The registry's signing configuration.</td>
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
    <td><a href="#get_signing_configuration"><CopyableCode code="get_signing_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the registry's signing configuration, which defines rules for automatically signing images using Amazon Web Services Signer. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#put_signing_configuration"><CopyableCode code="put_signing_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-signingConfiguration"><code>signingConfiguration</code></a></td>
    <td></td>
    <td>Creates or updates the registry's signing configuration, which defines rules for automatically signing images with Amazon Web Services Signer. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide. To successfully generate a signature, the IAM principal pushing images must have permission to sign payloads with the Amazon Web Services Signer signing profile referenced in the signing configuration.</td>
</tr>
<tr>
    <td><a href="#delete_signing_configuration"><CopyableCode code="delete_signing_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the registry's signing configuration. Images pushed after deletion of the signing configuration will no longer be automatically signed. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide. Deleting the signing configuration does not affect existing image signatures.</td>
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
    defaultValue="get_signing_configuration"
    values={[
        { label: 'get_signing_configuration', value: 'get_signing_configuration' }
    ]}
>
<TabItem value="get_signing_configuration">

Retrieves the registry's signing configuration, which defines rules for automatically signing images using Amazon Web Services Signer. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide.

```sql
SELECT
registryId,
signingConfiguration
FROM aws.ecr.signing_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_signing_configuration"
    values={[
        { label: 'put_signing_configuration', value: 'put_signing_configuration' }
    ]}
>
<TabItem value="put_signing_configuration">

Creates or updates the registry's signing configuration, which defines rules for automatically signing images with Amazon Web Services Signer. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide. To successfully generate a signature, the IAM principal pushing images must have permission to sign payloads with the Amazon Web Services Signer signing profile referenced in the signing configuration.

```sql
REPLACE aws.ecr.signing_configurations
SET 
signingConfiguration = '{{ signingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND signingConfiguration = '{{ signingConfiguration }}' --required
RETURNING
signingConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_signing_configuration"
    values={[
        { label: 'delete_signing_configuration', value: 'delete_signing_configuration' }
    ]}
>
<TabItem value="delete_signing_configuration">

Deletes the registry's signing configuration. Images pushed after deletion of the signing configuration will no longer be automatically signed. For more information, see Managed signing in the Amazon Elastic Container Registry User Guide. Deleting the signing configuration does not affect existing image signatures.

```sql
DELETE FROM aws.ecr.signing_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
