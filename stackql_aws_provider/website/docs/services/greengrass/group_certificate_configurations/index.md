--- 
title: group_certificate_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - group_certificate_configurations
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

Creates, updates, deletes, gets or lists a <code>group_certificate_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_certificate_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.group_certificate_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_certificate_configuration"
    values={[
        { label: 'get_group_certificate_configuration', value: 'get_group_certificate_configuration' }
    ]}
>
<TabItem value="get_group_certificate_configuration">

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
    <td><CopyableCode code="CertificateAuthorityExpiryInMilliseconds" /></td>
    <td><code>string</code></td>
    <td>The amount of time remaining before the certificate authority expires, in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateExpiryInMilliseconds" /></td>
    <td><code>string</code></td>
    <td>The amount of time remaining before the certificate expires, in milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the group certificate configuration.</td>
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
    <td><a href="#get_group_certificate_configuration"><CopyableCode code="get_group_certificate_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current configuration for the CA used by the group.</td>
</tr>
<tr>
    <td><a href="#update_group_certificate_configuration"><CopyableCode code="update_group_certificate_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the Certificate expiry time for a group.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group_certificate_configuration"
    values={[
        { label: 'get_group_certificate_configuration', value: 'get_group_certificate_configuration' }
    ]}
>
<TabItem value="get_group_certificate_configuration">

Retrieves the current configuration for the CA used by the group.

```sql
SELECT
CertificateAuthorityExpiryInMilliseconds,
CertificateExpiryInMilliseconds,
GroupId
FROM aws.greengrass.group_certificate_configurations
WHERE group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group_certificate_configuration"
    values={[
        { label: 'update_group_certificate_configuration', value: 'update_group_certificate_configuration' }
    ]}
>
<TabItem value="update_group_certificate_configuration">

Updates the Certificate expiry time for a group.

```sql
UPDATE aws.greengrass.group_certificate_configurations
SET 
CertificateExpiryInMilliseconds = '{{ CertificateExpiryInMilliseconds }}'
WHERE 
group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required
RETURNING
CertificateAuthorityExpiryInMilliseconds,
CertificateExpiryInMilliseconds,
GroupId;
```
</TabItem>
</Tabs>
