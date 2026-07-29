--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
  - iot
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

Creates, updates, deletes, gets or lists a <code>packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package"
    values={[
        { label: 'get_package', value: 'get_package' },
        { label: 'list_packages', value: 'list_packages' }
    ]}
>
<TabItem value="get_package">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the package was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the default package version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The package description. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the package was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="package_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the package.</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the software package. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_packages">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the package was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the default package version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the package was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name for the target software package. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_package"><CopyableCode code="get_package" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified software package. Requires permission to access the GetPackage action.</td>
</tr>
<tr>
    <td><a href="#list_packages"><CopyableCode code="list_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the software packages associated to the account. Requires permission to access the ListPackages action.</td>
</tr>
<tr>
    <td><a href="#create_package"><CopyableCode code="create_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Creates an IoT software package that can be deployed to your fleet. Requires permission to access the CreatePackage and GetIndexingConfiguration actions.</td>
</tr>
<tr>
    <td><a href="#update_package"><CopyableCode code="update_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates the supported fields for a specific software package. Requires permission to access the UpdatePackage and GetIndexingConfiguration actions.</td>
</tr>
<tr>
    <td><a href="#delete_package"><CopyableCode code="delete_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a specific version from a software package. Note: All package versions must be deleted before deleting the software package. Requires permission to access the DeletePackageVersion action.</td>
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
<tr id="parameter-package_name">
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the target software package.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package"
    values={[
        { label: 'get_package', value: 'get_package' },
        { label: 'list_packages', value: 'list_packages' }
    ]}
>
<TabItem value="get_package">

Gets information about the specified software package. Requires permission to access the GetPackage action.

```sql
SELECT
creation_date,
default_version_name,
description,
last_modified_date,
package_arn,
package_name
FROM aws.iot.packages
WHERE package_name = '{{ package_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_packages">

Lists the software packages associated to the account. Requires permission to access the ListPackages action.

```sql
SELECT
creation_date,
default_version_name,
last_modified_date,
package_name
FROM aws.iot.packages
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_package"
    values={[
        { label: 'create_package', value: 'create_package' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_package">

Creates an IoT software package that can be deployed to your fleet. Requires permission to access the CreatePackage and GetIndexingConfiguration actions.

```sql
INSERT INTO aws.iot.packages (
description,
tags,
package_name,
region,
clientToken
)
SELECT 
'{{ description }}',
'{{ tags }}',
'{{ package_name }}',
'{{ region }}',
'{{ clientToken }}'
RETURNING
description,
package_arn,
package_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: packages
  props:
    - name: package_name
      value: "{{ package_name }}"
      description: Required parameter for the packages resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the packages resource.
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
      description: A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_package"
    values={[
        { label: 'update_package', value: 'update_package' }
    ]}
>
<TabItem value="update_package">

Updates the supported fields for a specific software package. Requires permission to access the UpdatePackage and GetIndexingConfiguration actions.

```sql
UPDATE aws.iot.packages
SET 
description = '{{ description }}',
defaultVersionName = '{{ defaultVersionName }}',
unsetDefaultVersion = {{ unsetDefaultVersion }}
WHERE 
package_name = '{{ package_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package"
    values={[
        { label: 'delete_package', value: 'delete_package' }
    ]}
>
<TabItem value="delete_package">

Deletes a specific version from a software package. Note: All package versions must be deleted before deleting the software package. Requires permission to access the DeletePackageVersion action.

```sql
DELETE FROM aws.iot.packages
WHERE package_name = '{{ package_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
