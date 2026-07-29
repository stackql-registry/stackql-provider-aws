--- 
title: extensions
hide_title: false
hide_table_of_contents: false
keywords:
  - extensions
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

Creates, updates, deletes, gets or lists an <code>extensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="extensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.extensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_extension"
    values={[
        { label: 'get_extension', value: 'get_extension' },
        { label: 'list_extensions', value: 'list_extensions' }
    ]}
>
<TabItem value="get_extension">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>object</code></td>
    <td>The actions defined in the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The system-generated Amazon Resource Name (ARN) for the extension. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Information about the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the extension. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The extension name.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The extension version number.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_extensions">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The system-generated Amazon Resource Name (ARN) for the extension. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Information about the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the extension. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The extension name.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The extension version number.</td>
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
    <td><a href="#get_extension"><CopyableCode code="get_extension" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-extension_identifier"><code>extension_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version_number"><code>version_number</code></a></td>
    <td>Returns information about an AppConfig extension.</td>
</tr>
<tr>
    <td><a href="#list_extensions"><CopyableCode code="list_extensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#create_extension"><CopyableCode code="create_extension" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Latest-Version-Number"><code>Latest-Version-Number</code></a></td>
    <td>Creates an AppConfig extension. An extension augments your ability to inject logic or behavior at different points during the AppConfig workflow of creating or deploying a configuration. You can create your own extensions or use the Amazon Web Services authored extensions provided by AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing defined in the extension. If you plan to create custom versions of the Amazon Web Services authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in the Uri field for the new extension version. For a custom EventBridge notification extension, enter the ARN of the EventBridge default events in the Uri field. For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS topic in the Uri field. For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS message queue in the Uri field. For more information about extensions, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#update_extension"><CopyableCode code="update_extension" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-extension_identifier"><code>extension_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an AppConfig extension. For more information about extensions, see Extending workflows in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_extension"><CopyableCode code="delete_extension" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-extension_identifier"><code>extension_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes an AppConfig extension. You must delete all associations to an extension before you delete the extension.</td>
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
<tr id="parameter-extension_identifier">
    <td><CopyableCode code="extension_identifier" /></td>
    <td><code>string</code></td>
    <td>The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Latest-Version-Number">
    <td><CopyableCode code="Latest-Version-Number" /></td>
    <td><code>integer</code></td>
    <td>You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The extension name.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>A specific version of an extension to delete. If omitted, the highest version is deleted.</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The extension version number. If no version number was defined, AppConfig uses the highest version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_extension"
    values={[
        { label: 'get_extension', value: 'get_extension' },
        { label: 'list_extensions', value: 'list_extensions' }
    ]}
>
<TabItem value="get_extension">

Returns information about an AppConfig extension.

```sql
SELECT
actions,
arn,
description,
id,
name,
parameters,
version_number
FROM aws.appconfig.extensions
WHERE extension_identifier = '{{ extension_identifier }}' -- required
AND region = '{{ region }}' -- required
AND version_number = '{{ version_number }}'
;
```
</TabItem>
<TabItem value="list_extensions">

Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see Extending workflows in the AppConfig User Guide.

```sql
SELECT
arn,
description,
id,
name,
version_number
FROM aws.appconfig.extensions
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_extension"
    values={[
        { label: 'create_extension', value: 'create_extension' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_extension">

Creates an AppConfig extension. An extension augments your ability to inject logic or behavior at different points during the AppConfig workflow of creating or deploying a configuration. You can create your own extensions or use the Amazon Web Services authored extensions provided by AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing defined in the extension. If you plan to create custom versions of the Amazon Web Services authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in the Uri field for the new extension version. For a custom EventBridge notification extension, enter the ARN of the EventBridge default events in the Uri field. For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS topic in the Uri field. For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS message queue in the Uri field. For more information about extensions, see Extending workflows in the AppConfig User Guide.

```sql
INSERT INTO aws.appconfig.extensions (
Name,
Description,
Actions,
Parameters,
Tags,
region,
`Latest-Version-Number`
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Actions }}',
'{{ Parameters }}',
'{{ Tags }}',
'{{ region }}',
'{{ Latest-Version-Number }}'
RETURNING
actions,
arn,
description,
id,
name,
parameters,
version_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: extensions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the extensions resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Actions
      value: "{{ Actions }}"
    - name: Parameters
      value: "{{ Parameters }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Latest-Version-Number
      value: {{ Latest-Version-Number }}
      description: You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.
      description: You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_extension"
    values={[
        { label: 'update_extension', value: 'update_extension' }
    ]}
>
<TabItem value="update_extension">

Updates an AppConfig extension. For more information about extensions, see Extending workflows in the AppConfig User Guide.

```sql
UPDATE aws.appconfig.extensions
SET 
Description = '{{ Description }}',
Actions = '{{ Actions }}',
Parameters = '{{ Parameters }}',
VersionNumber = {{ VersionNumber }}
WHERE 
extension_identifier = '{{ extension_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
actions,
arn,
description,
id,
name,
parameters,
version_number;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_extension"
    values={[
        { label: 'delete_extension', value: 'delete_extension' }
    ]}
>
<TabItem value="delete_extension">

Deletes an AppConfig extension. You must delete all associations to an extension before you delete the extension.

```sql
DELETE FROM aws.appconfig.extensions
WHERE extension_identifier = '{{ extension_identifier }}' --required
AND region = '{{ region }}' --required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>
