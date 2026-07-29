--- 
title: principal_tag_attribute_maps
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_tag_attribute_maps
  - cognito_identity
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

Creates, updates, deletes, gets or lists a <code>principal_tag_attribute_maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_tag_attribute_maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_identity.principal_tag_attribute_maps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_principal_tag_attribute_map"
    values={[
        { label: 'get_principal_tag_attribute_map', value: 'get_principal_tag_attribute_map' }
    ]}
>
<TabItem value="get_principal_tag_attribute_map">

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
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>You can use this operation to get the ID of the Identity Pool you setup attribute mappings for. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_name" /></td>
    <td><code>string</code></td>
    <td>You can use this operation to get the provider name.</td>
</tr>
<tr>
    <td><CopyableCode code="principal_tags" /></td>
    <td><code>object</code></td>
    <td>You can use this operation to add principal tags. The PrincipalTagsoperation enables you to reference user attributes in your IAM permissions policy.</td>
</tr>
<tr>
    <td><CopyableCode code="use_defaults" /></td>
    <td><code>boolean</code></td>
    <td>You can use this operation to list</td>
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
    <td><a href="#get_principal_tag_attribute_map"><CopyableCode code="get_principal_tag_attribute_map" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use GetPrincipalTagAttributeMap to list all mappings between PrincipalTags and user attributes.</td>
</tr>
<tr>
    <td><a href="#set_principal_tag_attribute_map"><CopyableCode code="set_principal_tag_attribute_map" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityPoolId"><code>IdentityPoolId</code></a>, <a href="#parameter-IdentityProviderName"><code>IdentityProviderName</code></a></td>
    <td></td>
    <td>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</td>
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
    defaultValue="get_principal_tag_attribute_map"
    values={[
        { label: 'get_principal_tag_attribute_map', value: 'get_principal_tag_attribute_map' }
    ]}
>
<TabItem value="get_principal_tag_attribute_map">

Use GetPrincipalTagAttributeMap to list all mappings between PrincipalTags and user attributes.

```sql
SELECT
identity_pool_id,
identity_provider_name,
principal_tags,
use_defaults
FROM aws.cognito_identity.principal_tag_attribute_maps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_principal_tag_attribute_map"
    values={[
        { label: 'set_principal_tag_attribute_map', value: 'set_principal_tag_attribute_map' }
    ]}
>
<TabItem value="set_principal_tag_attribute_map">

You can use this operation to use default (username and clientID) attribute or custom attribute mappings.

```sql
UPDATE aws.cognito_identity.principal_tag_attribute_maps
SET 
IdentityPoolId = '{{ IdentityPoolId }}',
IdentityProviderName = '{{ IdentityProviderName }}',
UseDefaults = {{ UseDefaults }},
PrincipalTags = '{{ PrincipalTags }}'
WHERE 
region = '{{ region }}' --required
AND IdentityPoolId = '{{ IdentityPoolId }}' --required
AND IdentityProviderName = '{{ IdentityProviderName }}' --required
RETURNING
identity_pool_id,
identity_provider_name,
principal_tags,
use_defaults;
```
</TabItem>
</Tabs>
