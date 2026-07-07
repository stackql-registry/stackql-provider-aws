--- 
title: extension_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - extension_associations
  - appconfig
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

Creates, updates, deletes, gets or lists an <code>extension_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extension_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.extension_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_extension_association"
    values={[
        { label: 'get_extension_association', value: 'get_extension_association' },
        { label: 'list_extension_associations', value: 'list_extension_associations' }
    ]}
>
<TabItem value="get_extension_association">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The system-generated Amazon Resource Name (ARN) for the extension. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExtensionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the extension defined in the association. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExtensionVersionNumber" /></td>
    <td><code>integer</code></td>
    <td>The version number for the extension defined in the association.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID for the association.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>The parameter names and values defined in the association.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARNs of applications, configuration profiles, or environments defined in the association. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_extension_associations">

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
    <td><CopyableCode code="ExtensionArn" /></td>
    <td><code>string</code></td>
    <td>The system-generated Amazon Resource Name (ARN) for the extension. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The extension association ID. This ID is used to call other ExtensionAssociation API actions such as GetExtensionAssociation or DeleteExtensionAssociation.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARNs of applications, configuration profiles, or environments defined in the association. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_extension_association"><CopyableCode code="get_extension_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-extension_association_id"><code>extension_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an AppConfig extension association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#list_extension_associations"><CopyableCode code="list_extension_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-extension_identifier"><code>extension_identifier</code></a>, <a href="#parameter-extension_version_number"><code>extension_version_number</code></a>, <a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists all AppConfig extension associations in the account. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#create_extension_association"><CopyableCode code="create_extension_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExtensionIdentifier"><code>ExtensionIdentifier</code></a>, <a href="#parameter-ResourceIdentifier"><code>ResourceIdentifier</code></a></td>
    <td></td>
    <td>When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the AppConfig deployment events to Amazon SNS Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an extension association. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#update_extension_association"><CopyableCode code="update_extension_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-extension_association_id"><code>extension_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_extension_association"><CopyableCode code="delete_extension_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-extension_association_id"><code>extension_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an extension association. This action doesn't delete extensions defined in the association.</td>
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
<tr id="parameter-extension_association_id">
    <td><CopyableCode code="extension_association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the extension association to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-extension_identifier">
    <td><CopyableCode code="extension_identifier" /></td>
    <td><code>string</code></td>
    <td>The name, the ID, or the Amazon Resource Name (ARN) of the extension.</td>
</tr>
<tr id="parameter-extension_version_number">
    <td><CopyableCode code="extension_version_number" /></td>
    <td><code>integer</code></td>
    <td>The version number for the extension defined in the association.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results or pass null to get the first set of results.</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The ARN of an application, configuration profile, or environment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_extension_association"
    values={[
        { label: 'get_extension_association', value: 'get_extension_association' },
        { label: 'list_extension_associations', value: 'list_extension_associations' }
    ]}
>
<TabItem value="get_extension_association">

Returns information about an AppConfig extension association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.

```sql
SELECT
Arn,
ExtensionArn,
ExtensionVersionNumber,
Id,
Parameters,
ResourceArn
FROM aws.appconfig.extension_associations
WHERE extension_association_id = '{{ extension_association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_extension_associations">

Lists all AppConfig extension associations in the account. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.

```sql
SELECT
ExtensionArn,
Id,
ResourceArn
FROM aws.appconfig.extension_associations
WHERE region = '{{ region }}' -- required
AND resource_identifier = '{{ resource_identifier }}'
AND extension_identifier = '{{ extension_identifier }}'
AND extension_version_number = '{{ extension_version_number }}'
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_extension_association"
    values={[
        { label: 'create_extension_association', value: 'create_extension_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_extension_association">

When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the AppConfig deployment events to Amazon SNS Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an extension association. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.

```sql
INSERT INTO aws.appconfig.extension_associations (
ExtensionIdentifier,
ExtensionVersionNumber,
ResourceIdentifier,
Parameters,
Tags,
region
)
SELECT 
'{{ ExtensionIdentifier }}' /* required */,
{{ ExtensionVersionNumber }},
'{{ ResourceIdentifier }}' /* required */,
'{{ Parameters }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
ExtensionArn,
ExtensionVersionNumber,
Id,
Parameters,
ResourceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: extension_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the extension_associations resource.
    - name: ExtensionIdentifier
      value: "{{ ExtensionIdentifier }}"
    - name: ExtensionVersionNumber
      value: {{ ExtensionVersionNumber }}
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
    - name: Parameters
      value: "{{ Parameters }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_extension_association"
    values={[
        { label: 'update_extension_association', value: 'update_extension_association' }
    ]}
>
<TabItem value="update_extension_association">

Updates an association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide.

```sql
UPDATE aws.appconfig.extension_associations
SET 
Parameters = '{{ Parameters }}'
WHERE 
extension_association_id = '{{ extension_association_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
ExtensionArn,
ExtensionVersionNumber,
Id,
Parameters,
ResourceArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_extension_association"
    values={[
        { label: 'delete_extension_association', value: 'delete_extension_association' }
    ]}
>
<TabItem value="delete_extension_association">

Deletes an extension association. This action doesn't delete extensions defined in the association.

```sql
DELETE FROM aws.appconfig.extension_associations
WHERE extension_association_id = '{{ extension_association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
