--- 
title: provisioning_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_template_versions
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

Creates, updates, deletes, gets or lists a <code>provisioning_template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioning_template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.provisioning_template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_provisioning_template_version"
    values={[
        { label: 'describe_provisioning_template_version', value: 'describe_provisioning_template_version' },
        { label: 'list_provisioning_template_versions', value: 'list_provisioning_template_versions' }
    ]}
>
<TabItem value="describe_provisioning_template_version">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>True if the provisioning template version is the default version.</td>
</tr>
<tr>
    <td><CopyableCode code="templateBody" /></td>
    <td><code>string</code></td>
    <td>The JSON formatted contents of the provisioning template version. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>integer</code></td>
    <td>The provisioning template version ID.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioning_template_versions">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the provisioning template version was created</td>
</tr>
<tr>
    <td><CopyableCode code="isDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>True if the provisioning template version is the default version, otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>integer</code></td>
    <td>The ID of the fleet provisioning template version.</td>
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
    <td><a href="#describe_provisioning_template_version"><CopyableCode code="describe_provisioning_template_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a provisioning template version. Requires permission to access the DescribeProvisioningTemplateVersion action.</td>
</tr>
<tr>
    <td><a href="#list_provisioning_template_versions"><CopyableCode code="list_provisioning_template_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>A list of provisioning template versions. Requires permission to access the ListProvisioningTemplateVersions action.</td>
</tr>
<tr>
    <td><a href="#create_provisioning_template_version"><CopyableCode code="create_provisioning_template_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateBody"><code>templateBody</code></a></td>
    <td><a href="#parameter-setAsDefault"><code>setAsDefault</code></a></td>
    <td>Creates a new version of a provisioning template. Requires permission to access the CreateProvisioningTemplateVersion action.</td>
</tr>
<tr>
    <td><a href="#delete_provisioning_template_version"><CopyableCode code="delete_provisioning_template_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a provisioning template version. Requires permission to access the DeleteProvisioningTemplateVersion action.</td>
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
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning template version to delete.</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>integer</code></td>
    <td>The provisioning template version ID to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-setAsDefault">
    <td><CopyableCode code="setAsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Sets a fleet provision template version as the default version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_provisioning_template_version"
    values={[
        { label: 'describe_provisioning_template_version', value: 'describe_provisioning_template_version' },
        { label: 'list_provisioning_template_versions', value: 'list_provisioning_template_versions' }
    ]}
>
<TabItem value="describe_provisioning_template_version">

Returns information about a provisioning template version. Requires permission to access the DescribeProvisioningTemplateVersion action.

```sql
SELECT
creationDate,
isDefaultVersion,
templateBody,
versionId
FROM aws.iot.provisioning_template_versions
WHERE template_name = '{{ template_name }}' -- required
AND version_id = '{{ version_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioning_template_versions">

A list of provisioning template versions. Requires permission to access the ListProvisioningTemplateVersions action.

```sql
SELECT
creationDate,
isDefaultVersion,
versionId
FROM aws.iot.provisioning_template_versions
WHERE template_name = '{{ template_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioning_template_version"
    values={[
        { label: 'create_provisioning_template_version', value: 'create_provisioning_template_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioning_template_version">

Creates a new version of a provisioning template. Requires permission to access the CreateProvisioningTemplateVersion action.

```sql
INSERT INTO aws.iot.provisioning_template_versions (
templateBody,
template_name,
region,
setAsDefault
)
SELECT 
'{{ templateBody }}' /* required */,
'{{ template_name }}',
'{{ region }}',
'{{ setAsDefault }}'
RETURNING
isDefaultVersion,
templateArn,
templateName,
versionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioning_template_versions
  props:
    - name: template_name
      value: "{{ template_name }}"
      description: Required parameter for the provisioning_template_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioning_template_versions resource.
    - name: templateBody
      value: "{{ templateBody }}"
    - name: setAsDefault
      value: {{ setAsDefault }}
      description: Sets a fleet provision template version as the default version.
      description: Sets a fleet provision template version as the default version.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioning_template_version"
    values={[
        { label: 'delete_provisioning_template_version', value: 'delete_provisioning_template_version' }
    ]}
>
<TabItem value="delete_provisioning_template_version">

Deletes a provisioning template version. Requires permission to access the DeleteProvisioningTemplateVersion action.

```sql
DELETE FROM aws.iot.provisioning_template_versions
WHERE template_name = '{{ template_name }}' --required
AND version_id = '{{ version_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
