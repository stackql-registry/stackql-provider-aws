--- 
title: hosted_configuration_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_configuration_versions
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

Creates, updates, deletes, gets or lists a <code>hosted_configuration_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_configuration_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.hosted_configuration_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_configuration_version"
    values={[
        { label: 'get_hosted_configuration_version', value: 'get_hosted_configuration_version' },
        { label: 'list_hosted_configuration_versions', value: 'list_hosted_configuration_versions' }
    ]}
>
<TabItem value="get_hosted_configuration_version">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string (byte)</code></td>
    <td>The content of the configuration or the configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the configuration content. For more information, see Content-Type.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the Key Management Service key that was used to encrypt this specific version of the configuration data in the AppConfig hosted configuration store. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>A user-defined label for an AppConfig hosted configuration version. (pattern: &lt;code&gt;.*&#91;^0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The configuration version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hosted_configuration_versions">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the configuration content. For more information, see Content-Type.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the Key Management Service key that was used to encrypt this specific version of the configuration data in the AppConfig hosted configuration store. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>A user-defined label for an AppConfig hosted configuration version. (pattern: &lt;code&gt;.*&#91;^0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The configuration version.</td>
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
    <td><a href="#get_hosted_configuration_version"><CopyableCode code="get_hosted_configuration_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific configuration version.</td>
</tr>
<tr>
    <td><a href="#list_hosted_configuration_versions"><CopyableCode code="list_hosted_configuration_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-version_label"><code>version_label</code></a></td>
    <td>Lists configurations stored in the AppConfig hosted configuration store by version.</td>
</tr>
<tr>
    <td><a href="#create_hosted_configuration_version"><CopyableCode code="create_hosted_configuration_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Latest-Version-Number"><code>Latest-Version-Number</code></a>, <a href="#parameter-VersionLabel"><code>VersionLabel</code></a></td>
    <td>Creates a new configuration in the AppConfig hosted configuration store. If you're creating a feature flag, we recommend you familiarize yourself with the JSON schema for feature flag data. For more information, see Type reference for AWS.AppConfig.FeatureFlags in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_hosted_configuration_version"><CopyableCode code="delete_hosted_configuration_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-version_number"><code>version_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a version of a configuration from the AppConfig hosted configuration store.</td>
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
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>A standard MIME type describing the format of the configuration content. For more information, see Content-Type.</td>
</tr>
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID.</td>
</tr>
<tr id="parameter-configuration_profile_id">
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_number">
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The versions number to delete.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the configuration. Due to HTTP limitations, this field only supports ASCII characters.</td>
</tr>
<tr id="parameter-Latest-Version-Number">
    <td><CopyableCode code="Latest-Version-Number" /></td>
    <td><code>integer</code></td>
    <td>An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.</td>
</tr>
<tr id="parameter-VersionLabel">
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0".</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. If MaxResults is not provided in the call, AppConfig returns the maximum of 50. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results.</td>
</tr>
<tr id="parameter-version_label">
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a wildcard, for example "v2*". If you don't specify an asterisk at the end of the value, only an exact match is returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hosted_configuration_version"
    values={[
        { label: 'get_hosted_configuration_version', value: 'get_hosted_configuration_version' },
        { label: 'list_hosted_configuration_versions', value: 'list_hosted_configuration_versions' }
    ]}
>
<TabItem value="get_hosted_configuration_version">

Retrieves information about a specific configuration version.

```sql
SELECT
application_id,
configuration_profile_id,
content,
content_type,
description,
kms_key_arn,
version_label,
version_number
FROM aws.appconfig.hosted_configuration_versions
WHERE application_id = '{{ application_id }}' -- required
AND configuration_profile_id = '{{ configuration_profile_id }}' -- required
AND version_number = '{{ version_number }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hosted_configuration_versions">

Lists configurations stored in the AppConfig hosted configuration store by version.

```sql
SELECT
application_id,
configuration_profile_id,
content_type,
description,
kms_key_arn,
version_label,
version_number
FROM aws.appconfig.hosted_configuration_versions
WHERE application_id = '{{ application_id }}' -- required
AND configuration_profile_id = '{{ configuration_profile_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND version_label = '{{ version_label }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hosted_configuration_version"
    values={[
        { label: 'create_hosted_configuration_version', value: 'create_hosted_configuration_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hosted_configuration_version">

Creates a new configuration in the AppConfig hosted configuration store. If you're creating a feature flag, we recommend you familiarize yourself with the JSON schema for feature flag data. For more information, see Type reference for AWS.AppConfig.FeatureFlags in the AppConfig User Guide.

```sql
INSERT INTO aws.appconfig.hosted_configuration_versions (
Content,
application_id,
configuration_profile_id,
`Content-Type`,
region,
Description,
`Latest-Version-Number`,
VersionLabel
)
SELECT 
'{{ Content }}',
'{{ application_id }}',
'{{ configuration_profile_id }}',
'{{ Content-Type }}',
'{{ region }}',
'{{ Description }}',
'{{ Latest-Version-Number }}',
'{{ VersionLabel }}'
RETURNING
application_id,
configuration_profile_id,
content,
content_type,
description,
kms_key_arn,
version_label,
version_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hosted_configuration_versions
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the hosted_configuration_versions resource.
    - name: configuration_profile_id
      value: "{{ configuration_profile_id }}"
      description: Required parameter for the hosted_configuration_versions resource.
    - name: Content-Type
      value: "{{ Content-Type }}"
      description: Required parameter for the hosted_configuration_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hosted_configuration_versions resource.
    - name: Content
      value: "{{ Content }}"
    - name: Description
      value: "{{ Description }}"
      description: A description of the configuration. Due to HTTP limitations, this field only supports ASCII characters.
      description: A description of the configuration. Due to HTTP limitations, this field only supports ASCII characters.
    - name: Latest-Version-Number
      value: {{ Latest-Version-Number }}
      description: An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
      description: An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
    - name: VersionLabel
      value: "{{ VersionLabel }}"
      description: An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0".
      description: An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0".
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hosted_configuration_version"
    values={[
        { label: 'delete_hosted_configuration_version', value: 'delete_hosted_configuration_version' }
    ]}
>
<TabItem value="delete_hosted_configuration_version">

Deletes a version of a configuration from the AppConfig hosted configuration store.

```sql
DELETE FROM aws.appconfig.hosted_configuration_versions
WHERE application_id = '{{ application_id }}' --required
AND configuration_profile_id = '{{ configuration_profile_id }}' --required
AND version_number = '{{ version_number }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
