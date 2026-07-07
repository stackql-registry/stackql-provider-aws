--- 
title: service_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_template_versions
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_template_version"
    values={[
        { label: 'get_service_template_version', value: 'get_service_template_version' },
        { label: 'list_service_template_versions', value: 'list_service_template_versions' }
    ]}
>
<TabItem value="get_service_template_version">

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
    <td>The Amazon Resource Name (ARN) of the version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="compatibleEnvironmentTemplates" /></td>
    <td><code>array</code></td>
    <td>An array of compatible environment template names for the major version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the version of a service template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the version of a service template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="majorVersion" /></td>
    <td><code>string</code></td>
    <td>The latest major version that's associated with the version of a service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="minorVersion" /></td>
    <td><code>string</code></td>
    <td>The minor version of a service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedMinorVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended minor version of the service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schema of the version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The service template version status. (REGISTRATION_IN_PROGRESS, REGISTRATION_FAILED, DRAFT, PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A service template version status message.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedComponentSources" /></td>
    <td><code>array</code></td>
    <td>An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the version of a service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_template_versions">

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
    <td>The Amazon Resource Name (ARN) of the version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the version of a service template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the version of a service template.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the version of a service template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="majorVersion" /></td>
    <td><code>string</code></td>
    <td>The latest major version that's associated with the version of a service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="minorVersion" /></td>
    <td><code>string</code></td>
    <td>The minor version of a service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedMinorVersion" /></td>
    <td><code>string</code></td>
    <td>The recommended minor version of the service template. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The service template minor version status. (REGISTRATION_IN_PROGRESS, REGISTRATION_FAILED, DRAFT, PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A service template minor version status message.</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_service_template_version"><CopyableCode code="get_service_template_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a major or minor version of a service template.</td>
</tr>
<tr>
    <td><a href="#list_service_template_versions"><CopyableCode code="list_service_template_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List major or minor versions of a service template with detail data.</td>
</tr>
<tr>
    <td><a href="#create_service_template_version"><CopyableCode code="create_service_template_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compatibleEnvironmentTemplates"><code>compatibleEnvironmentTemplates</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td></td>
    <td>Create a new major or minor version of a service template. A major version of a service template is a version that isn't backward compatible. A minor version of a service template is a version that's backward compatible within its major version.</td>
</tr>
<tr>
    <td><a href="#update_service_template_version"><CopyableCode code="update_service_template_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-majorVersion"><code>majorVersion</code></a>, <a href="#parameter-minorVersion"><code>minorVersion</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td></td>
    <td>Update a major or minor version of a service template.</td>
</tr>
<tr>
    <td><a href="#delete_service_template_version"><CopyableCode code="delete_service_template_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>If no other minor versions of a service template exist, delete a major version of the service template if it's not the Recommended version. Delete the Recommended version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that isn't backwards compatible. Delete a minor version of a service template if it's not the Recommended version. Delete a Recommended minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.</td>
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
    defaultValue="get_service_template_version"
    values={[
        { label: 'get_service_template_version', value: 'get_service_template_version' },
        { label: 'list_service_template_versions', value: 'list_service_template_versions' }
    ]}
>
<TabItem value="get_service_template_version">

Get detailed data for a major or minor version of a service template.

```sql
SELECT
arn,
compatibleEnvironmentTemplates,
createdAt,
description,
lastModifiedAt,
majorVersion,
minorVersion,
recommendedMinorVersion,
schema,
status,
statusMessage,
supportedComponentSources,
templateName
FROM aws.proton.service_template_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_template_versions">

List major or minor versions of a service template with detail data.

```sql
SELECT
arn,
createdAt,
description,
lastModifiedAt,
majorVersion,
minorVersion,
recommendedMinorVersion,
status,
statusMessage,
templateName
FROM aws.proton.service_template_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_template_version"
    values={[
        { label: 'create_service_template_version', value: 'create_service_template_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_template_version">

Create a new major or minor version of a service template. A major version of a service template is a version that isn't backward compatible. A minor version of a service template is a version that's backward compatible within its major version.

```sql
INSERT INTO aws.proton.service_template_versions (
clientToken,
compatibleEnvironmentTemplates,
description,
majorVersion,
source,
supportedComponentSources,
tags,
templateName,
region
)
SELECT 
'{{ clientToken }}',
'{{ compatibleEnvironmentTemplates }}' /* required */,
'{{ description }}',
'{{ majorVersion }}',
'{{ source }}' /* required */,
'{{ supportedComponentSources }}',
'{{ tags }}',
'{{ templateName }}' /* required */,
'{{ region }}'
RETURNING
serviceTemplateVersion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_template_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_template_versions resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        When included, if two identical requests are made with the same client token, Proton returns the service template version that the first request created.
    - name: compatibleEnvironmentTemplates
      description: |
        An array of environment template objects that are compatible with the new service template version. A service instance based on this service template version can run in environments based on compatible templates.
      value:
        - majorVersion: "{{ majorVersion }}"
          templateName: "{{ templateName }}"
    - name: description
      value: "{{ description }}"
      description: |
        A description of the new version of a service template.
    - name: majorVersion
      value: "{{ majorVersion }}"
      description: |
        To create a new minor version of the service template, include a major Version. To create a new major and minor version of the service template, exclude major Version.
    - name: source
      description: |
        An object that includes the template bundle S3 bucket path and name for the new version of a service template.
      value:
        s3:
          bucket: "{{ bucket }}"
          key: "{{ key }}"
    - name: supportedComponentSources
      value:
        - "{{ supportedComponentSources }}"
      description: |
        An array of supported component sources. Components with supported sources can be attached to service instances based on this service template version. For more information about components, see Proton components in the Proton User Guide.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton service template version. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: templateName
      value: "{{ templateName }}"
      description: |
        The name of the service template.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_template_version"
    values={[
        { label: 'update_service_template_version', value: 'update_service_template_version' }
    ]}
>
<TabItem value="update_service_template_version">

Update a major or minor version of a service template.

```sql
UPDATE aws.proton.service_template_versions
SET 
compatibleEnvironmentTemplates = '{{ compatibleEnvironmentTemplates }}',
description = '{{ description }}',
majorVersion = '{{ majorVersion }}',
minorVersion = '{{ minorVersion }}',
status = '{{ status }}',
supportedComponentSources = '{{ supportedComponentSources }}',
templateName = '{{ templateName }}'
WHERE 
region = '{{ region }}' --required
AND majorVersion = '{{ majorVersion }}' --required
AND minorVersion = '{{ minorVersion }}' --required
AND templateName = '{{ templateName }}' --required
RETURNING
serviceTemplateVersion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_template_version"
    values={[
        { label: 'delete_service_template_version', value: 'delete_service_template_version' }
    ]}
>
<TabItem value="delete_service_template_version">

If no other minor versions of a service template exist, delete a major version of the service template if it's not the Recommended version. Delete the Recommended version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that isn't backwards compatible. Delete a minor version of a service template if it's not the Recommended version. Delete a Recommended minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.

```sql
DELETE FROM aws.proton.service_template_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
