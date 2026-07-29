--- 
title: package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - package_versions
  - panorama
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

Creates, updates, deletes, gets or lists a <code>package_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.package_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_package_version"
    values={[
        { label: 'describe_package_version', value: 'describe_package_version' }
    ]}
>
<TabItem value="describe_package_version">

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
    <td><CopyableCode code="is_latest_patch" /></td>
    <td><code>boolean</code></td>
    <td>Whether the version is the latest available.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The account ID of the version's owner. (pattern: &lt;code&gt;^&#91;0-9a-z\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>The version's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The version's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package_version" /></td>
    <td><code>string</code></td>
    <td>The version's version. (pattern: &lt;code&gt;^(&#91;0-9&#93;+)\.(&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="patch_version" /></td>
    <td><code>string</code></td>
    <td>The version's patch version. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registered_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The version's registered time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The version's status. (REGISTER_PENDING, REGISTER_COMPLETED, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_description" /></td>
    <td><code>string</code></td>
    <td>The version's status description.</td>
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
    <td><a href="#describe_package_version"><CopyableCode code="describe_package_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-package_version"><code>package_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a>, <a href="#parameter-PatchVersion"><code>PatchVersion</code></a></td>
    <td>Returns information about a package version.</td>
</tr>
<tr>
    <td><a href="#register_package_version"><CopyableCode code="register_package_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-package_version"><code>package_version</code></a>, <a href="#parameter-patch_version"><code>patch_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Registers a package version.</td>
</tr>
<tr>
    <td><a href="#deregister_package_version"><CopyableCode code="deregister_package_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_id"><code>package_id</code></a>, <a href="#parameter-package_version"><code>package_version</code></a>, <a href="#parameter-patch_version"><code>patch_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a>, <a href="#parameter-UpdatedLatestPatchVersion"><code>UpdatedLatestPatchVersion</code></a></td>
    <td>Deregisters a package version.</td>
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
<tr id="parameter-package_id">
    <td><CopyableCode code="package_id" /></td>
    <td><code>string</code></td>
    <td>A package ID.</td>
</tr>
<tr id="parameter-package_version">
    <td><CopyableCode code="package_version" /></td>
    <td><code>string</code></td>
    <td>A package version.</td>
</tr>
<tr id="parameter-patch_version">
    <td><CopyableCode code="patch_version" /></td>
    <td><code>string</code></td>
    <td>A patch version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-OwnerAccount">
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>An owner account.</td>
</tr>
<tr id="parameter-PatchVersion">
    <td><CopyableCode code="PatchVersion" /></td>
    <td><code>string</code></td>
    <td>The version's patch version.</td>
</tr>
<tr id="parameter-UpdatedLatestPatchVersion">
    <td><CopyableCode code="UpdatedLatestPatchVersion" /></td>
    <td><code>string</code></td>
    <td>If the version was marked latest, the new version to maker as latest.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_package_version"
    values={[
        { label: 'describe_package_version', value: 'describe_package_version' }
    ]}
>
<TabItem value="describe_package_version">

Returns information about a package version.

```sql
SELECT
is_latest_patch,
owner_account,
package_arn,
package_id,
package_name,
package_version,
patch_version,
registered_time,
status,
status_description
FROM aws.panorama.package_versions
WHERE package_id = '{{ package_id }}' -- required
AND package_version = '{{ package_version }}' -- required
AND region = '{{ region }}' -- required
AND OwnerAccount = '{{ OwnerAccount }}'
AND PatchVersion = '{{ PatchVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_package_version"
    values={[
        { label: 'register_package_version', value: 'register_package_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_package_version">

Registers a package version.

```sql
INSERT INTO aws.panorama.package_versions (
MarkLatest,
OwnerAccount,
package_id,
package_version,
patch_version,
region
)
SELECT 
{{ MarkLatest }},
'{{ OwnerAccount }}',
'{{ package_id }}',
'{{ package_version }}',
'{{ patch_version }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: package_versions
  props:
    - name: package_id
      value: "{{ package_id }}"
      description: Required parameter for the package_versions resource.
    - name: package_version
      value: "{{ package_version }}"
      description: Required parameter for the package_versions resource.
    - name: patch_version
      value: "{{ patch_version }}"
      description: Required parameter for the package_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the package_versions resource.
    - name: MarkLatest
      value: {{ MarkLatest }}
    - name: OwnerAccount
      value: "{{ OwnerAccount }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_package_version"
    values={[
        { label: 'deregister_package_version', value: 'deregister_package_version' }
    ]}
>
<TabItem value="deregister_package_version">

Deregisters a package version.

```sql
DELETE FROM aws.panorama.package_versions
WHERE package_id = '{{ package_id }}' --required
AND package_version = '{{ package_version }}' --required
AND patch_version = '{{ patch_version }}' --required
AND region = '{{ region }}' --required
AND OwnerAccount = '{{ OwnerAccount }}'
AND UpdatedLatestPatchVersion = '{{ UpdatedLatestPatchVersion }}'
;
```
</TabItem>
</Tabs>
