--- 
title: certificate_based_auth_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_based_auth_properties
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>certificate_based_auth_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_based_auth_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.certificate_based_auth_properties" /></td></tr>
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
    <td><a href="#modify_certificate_based_auth_properties"><CopyableCode code="modify_certificate_based_auth_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="modify_certificate_based_auth_properties"
    values={[
        { label: 'modify_certificate_based_auth_properties', value: 'modify_certificate_based_auth_properties' }
    ]}
>
<TabItem value="modify_certificate_based_auth_properties">

Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.

```sql
UPDATE aws.workspaces.certificate_based_auth_properties
SET 
ResourceId = '{{ ResourceId }}',
CertificateBasedAuthProperties = '{{ CertificateBasedAuthProperties }}',
PropertiesToDelete = '{{ PropertiesToDelete }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required;
```
</TabItem>
</Tabs>
