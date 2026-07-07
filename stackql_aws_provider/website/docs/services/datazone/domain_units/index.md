--- 
title: domain_units
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_units
  - datazone
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

Creates, updates, deletes, gets or lists a <code>domain_units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_units" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.domain_units" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_unit"
    values={[
        { label: 'get_domain_unit', value: 'get_domain_unit' }
    ]}
>
<TabItem value="get_domain_unit">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain unit. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp at which the domain unit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the domain unit.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the domain unit.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain in which the domain unit lives. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the domain unit was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last updated the domain unit.</td>
</tr>
<tr>
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>The owners of the domain unit.</td>
</tr>
<tr>
    <td><CopyableCode code="parentDomainUnitId" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent domain unit. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_domain_unit"><CopyableCode code="get_domain_unit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the specified domain unit.</td>
</tr>
<tr>
    <td><a href="#create_domain_unit"><CopyableCode code="create_domain_unit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parentDomainUnitIdentifier"><code>parentDomainUnitIdentifier</code></a></td>
    <td></td>
    <td>Creates a domain unit in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_domain_unit"><CopyableCode code="update_domain_unit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the domain unit.</td>
</tr>
<tr>
    <td><a href="#delete_domain_unit"><CopyableCode code="delete_domain_unit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a domain unit.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to delete a domain unit.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit that you want to delete.</td>
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
    defaultValue="get_domain_unit"
    values={[
        { label: 'get_domain_unit', value: 'get_domain_unit' }
    ]}
>
<TabItem value="get_domain_unit">

Gets the details of the specified domain unit.

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
lastUpdatedAt,
lastUpdatedBy,
owners,
parentDomainUnitId
FROM aws.datazone.domain_units
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_unit"
    values={[
        { label: 'create_domain_unit', value: 'create_domain_unit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_unit">

Creates a domain unit in Amazon DataZone.

```sql
INSERT INTO aws.datazone.domain_units (
name,
parentDomainUnitIdentifier,
description,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ parentDomainUnitIdentifier }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
ancestorDomainUnitIds,
createdAt,
createdBy,
description,
domainId,
owners,
parentDomainUnitId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_units
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the domain_units resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_units resource.
    - name: name
      value: "{{ name }}"
    - name: parentDomainUnitIdentifier
      value: "{{ parentDomainUnitIdentifier }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_unit"
    values={[
        { label: 'update_domain_unit', value: 'update_domain_unit' }
    ]}
>
<TabItem value="update_domain_unit">

Updates the domain unit.

```sql
UPDATE aws.datazone.domain_units
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
createdAt,
createdBy,
description,
domainId,
lastUpdatedAt,
lastUpdatedBy,
owners,
parentDomainUnitId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_unit"
    values={[
        { label: 'delete_domain_unit', value: 'delete_domain_unit' }
    ]}
>
<TabItem value="delete_domain_unit">

Deletes a domain unit.

```sql
DELETE FROM aws.datazone.domain_units
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
