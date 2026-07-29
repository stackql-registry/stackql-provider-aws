--- 
title: instance_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profiles
  - devicefarm
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

Creates, updates, deletes, gets or lists an <code>instance_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.instance_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_profile"
    values={[
        { label: 'get_instance_profile', value: 'get_instance_profile' },
        { label: 'list_instance_profiles', value: 'list_instance_profiles' }
    ]}
>
<TabItem value="get_instance_profile">

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
    <td>The name of the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance profile. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_app_packages_from_cleanup" /></td>
    <td><code>array</code></td>
    <td>An array of strings containing the list of app packages that should not be cleaned up from the device after a test run completes. The list of packages is considered only if you set packageCleanup to true.</td>
</tr>
<tr>
    <td><CopyableCode code="package_cleanup" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, Device Farm removes app packages after a test run. The default value is false for private devices.</td>
</tr>
<tr>
    <td><CopyableCode code="reboot_after_use" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, Device Farm reboots the instance after a test run. The default value is true.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instance_profiles">

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
    <td>The name of the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance profile. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_app_packages_from_cleanup" /></td>
    <td><code>array</code></td>
    <td>An array of strings containing the list of app packages that should not be cleaned up from the device after a test run completes. The list of packages is considered only if you set packageCleanup to true.</td>
</tr>
<tr>
    <td><CopyableCode code="package_cleanup" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, Device Farm removes app packages after a test run. The default value is false for private devices.</td>
</tr>
<tr>
    <td><CopyableCode code="reboot_after_use" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, Device Farm reboots the instance after a test run. The default value is true.</td>
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
    <td><a href="#get_instance_profile"><CopyableCode code="get_instance_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified instance profile.</td>
</tr>
<tr>
    <td><a href="#list_instance_profiles"><CopyableCode code="list_instance_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all the instance profiles in an AWS account.</td>
</tr>
<tr>
    <td><a href="#create_instance_profile"><CopyableCode code="create_instance_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a profile that can be applied to one or more private fleet device instances.</td>
</tr>
<tr>
    <td><a href="#update_instance_profile"><CopyableCode code="update_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates information about an existing private device instance profile.</td>
</tr>
<tr>
    <td><a href="#delete_instance_profile"><CopyableCode code="delete_instance_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a profile that can be applied to one or more private device instances.</td>
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
    defaultValue="get_instance_profile"
    values={[
        { label: 'get_instance_profile', value: 'get_instance_profile' },
        { label: 'list_instance_profiles', value: 'list_instance_profiles' }
    ]}
>
<TabItem value="get_instance_profile">

Returns information about the specified instance profile.

```sql
SELECT
name,
arn,
description,
exclude_app_packages_from_cleanup,
package_cleanup,
reboot_after_use
FROM aws.devicefarm.instance_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instance_profiles">

Returns information about all the instance profiles in an AWS account.

```sql
SELECT
name,
arn,
description,
exclude_app_packages_from_cleanup,
package_cleanup,
reboot_after_use
FROM aws.devicefarm.instance_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_profile"
    values={[
        { label: 'create_instance_profile', value: 'create_instance_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_profile">

Creates a profile that can be applied to one or more private fleet device instances.

```sql
INSERT INTO aws.devicefarm.instance_profiles (
name,
description,
packageCleanup,
excludeAppPackagesFromCleanup,
rebootAfterUse,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
{{ packageCleanup }},
'{{ excludeAppPackagesFromCleanup }}',
{{ rebootAfterUse }},
'{{ region }}'
RETURNING
instance_profile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_profiles resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of your instance profile.
    - name: description
      value: "{{ description }}"
      description: |
        The description of your instance profile.
    - name: packageCleanup
      value: {{ packageCleanup }}
      description: |
        When set to true, Device Farm removes app packages after a test run. The default value is false for private devices.
    - name: excludeAppPackagesFromCleanup
      value:
        - "{{ excludeAppPackagesFromCleanup }}"
      description: |
        An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run. The list of packages is considered only if you set packageCleanup to true.
    - name: rebootAfterUse
      value: {{ rebootAfterUse }}
      description: |
        When set to true, Device Farm reboots the instance after a test run. The default value is true.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance_profile"
    values={[
        { label: 'update_instance_profile', value: 'update_instance_profile' }
    ]}
>
<TabItem value="update_instance_profile">

Updates information about an existing private device instance profile.

```sql
UPDATE aws.devicefarm.instance_profiles
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
packageCleanup = {{ packageCleanup }},
excludeAppPackagesFromCleanup = '{{ excludeAppPackagesFromCleanup }}',
rebootAfterUse = {{ rebootAfterUse }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
instance_profile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_profile"
    values={[
        { label: 'delete_instance_profile', value: 'delete_instance_profile' }
    ]}
>
<TabItem value="delete_instance_profile">

Deletes a profile that can be applied to one or more private device instances.

```sql
DELETE FROM aws.devicefarm.instance_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
