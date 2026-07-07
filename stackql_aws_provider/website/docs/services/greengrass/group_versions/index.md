--- 
title: group_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - group_versions
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>group_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.group_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_version"
    values={[
        { label: 'get_group_version', value: 'get_group_version' },
        { label: 'list_group_versions', value: 'list_group_versions' }
    ]}
>
<TabItem value="get_group_version">

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
    <td>The ARN of the group version.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the group version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>object</code></td>
    <td>Information about a group version.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the group that the version is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The ID of the group version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_group_versions">

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
    <td>The ARN of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent definition that the version is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The ID of the version.</td>
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
    <td><a href="#get_group_version"><CopyableCode code="get_group_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-group_version_id"><code>group_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a group version.</td>
</tr>
<tr>
    <td><a href="#list_group_versions"><CopyableCode code="list_group_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the versions of a group.</td>
</tr>
<tr>
    <td><a href="#create_group_version"><CopyableCode code="create_group_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a version of a group which has already been defined.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group.</td>
</tr>
<tr id="parameter-group_version_id">
    <td><CopyableCode code="group_version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group_version"
    values={[
        { label: 'get_group_version', value: 'get_group_version' },
        { label: 'list_group_versions', value: 'list_group_versions' }
    ]}
>
<TabItem value="get_group_version">

Retrieves information about a group version.

```sql
SELECT
Arn,
CreationTimestamp,
Definition,
Id,
Version
FROM aws.greengrass.group_versions
WHERE group_id = '{{ group_id }}' -- required
AND group_version_id = '{{ group_version_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_group_versions">

Lists the versions of a group.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
Version
FROM aws.greengrass.group_versions
WHERE group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group_version"
    values={[
        { label: 'create_group_version', value: 'create_group_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group_version">

Creates a version of a group which has already been defined.

```sql
INSERT INTO aws.greengrass.group_versions (
ConnectorDefinitionVersionArn,
CoreDefinitionVersionArn,
DeviceDefinitionVersionArn,
FunctionDefinitionVersionArn,
LoggerDefinitionVersionArn,
ResourceDefinitionVersionArn,
SubscriptionDefinitionVersionArn,
group_id,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ ConnectorDefinitionVersionArn }}',
'{{ CoreDefinitionVersionArn }}',
'{{ DeviceDefinitionVersionArn }}',
'{{ FunctionDefinitionVersionArn }}',
'{{ LoggerDefinitionVersionArn }}',
'{{ ResourceDefinitionVersionArn }}',
'{{ SubscriptionDefinitionVersionArn }}',
'{{ group_id }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn,
CreationTimestamp,
Id,
Version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_versions
  props:
    - name: group_id
      value: "{{ group_id }}"
      description: Required parameter for the group_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the group_versions resource.
    - name: ConnectorDefinitionVersionArn
      value: "{{ ConnectorDefinitionVersionArn }}"
    - name: CoreDefinitionVersionArn
      value: "{{ CoreDefinitionVersionArn }}"
    - name: DeviceDefinitionVersionArn
      value: "{{ DeviceDefinitionVersionArn }}"
    - name: FunctionDefinitionVersionArn
      value: "{{ FunctionDefinitionVersionArn }}"
    - name: LoggerDefinitionVersionArn
      value: "{{ LoggerDefinitionVersionArn }}"
    - name: ResourceDefinitionVersionArn
      value: "{{ ResourceDefinitionVersionArn }}"
    - name: SubscriptionDefinitionVersionArn
      value: "{{ SubscriptionDefinitionVersionArn }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>
