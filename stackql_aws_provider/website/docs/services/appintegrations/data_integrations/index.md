--- 
title: data_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integrations
  - appintegrations
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

Creates, updates, deletes, gets or lists a <code>data_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appintegrations.data_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_integration"
    values={[
        { label: 'get_data_integration', value: 'get_data_integration' },
        { label: 'list_data_integrations', value: 'list_data_integrations' }
    ]}
>
<TabItem value="get_data_integration">

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
    <td>The Amazon Resource Name (ARN) for the DataIntegration. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN for the DataIntegration. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FileConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for what files should be pulled from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKey" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN for the DataIntegration. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the DataIntegration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for what data should be pulled from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>The name of the data and how often it should be pulled from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceURI" /></td>
    <td><code>string</code></td>
    <td>The URI of the data source. (pattern: &lt;code&gt;^(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+$)|(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.,-&#93;+$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_integrations">

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
    <td>The Amazon Resource Name (ARN) of the DataIntegration. (pattern: &lt;code&gt;^arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the DataIntegration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceURI" /></td>
    <td><code>string</code></td>
    <td>The URI of the data source. (pattern: &lt;code&gt;^(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+$)|(\w+\:\/\/&#91;\w.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.-&#93;+&#91;\w/!@#+=.,-&#93;+$)&lt;/code&gt;)</td>
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
    <td><a href="#get_data_integration"><CopyableCode code="get_data_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the DataIntegration. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
</tr>
<tr>
    <td><a href="#list_data_integrations"><CopyableCode code="list_data_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a paginated list of DataIntegrations in the account. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
</tr>
<tr>
    <td><a href="#create_data_integration"><CopyableCode code="create_data_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KmsKey"><code>KmsKey</code></a></td>
    <td></td>
    <td>Creates and persists a DataIntegration resource. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
</tr>
<tr>
    <td><a href="#update_data_integration"><CopyableCode code="update_data_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the description of a DataIntegration. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
</tr>
<tr>
    <td><a href="#delete_data_integration"><CopyableCode code="delete_data_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the DataIntegration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_integration"
    values={[
        { label: 'get_data_integration', value: 'get_data_integration' },
        { label: 'list_data_integrations', value: 'list_data_integrations' }
    ]}
>
<TabItem value="get_data_integration">

Returns information about the DataIntegration. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
SELECT
Arn,
Description,
FileConfiguration,
Id,
KmsKey,
Name,
ObjectConfiguration,
ScheduleConfiguration,
SourceURI,
Tags
FROM aws.appintegrations.data_integrations
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_integrations">

Returns a paginated list of DataIntegrations in the account. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
SELECT
Arn,
Name,
SourceURI
FROM aws.appintegrations.data_integrations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_integration"
    values={[
        { label: 'create_data_integration', value: 'create_data_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_integration">

Creates and persists a DataIntegration resource. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
INSERT INTO aws.appintegrations.data_integrations (
Name,
Description,
KmsKey,
SourceURI,
ScheduleConfig,
Tags,
ClientToken,
FileConfiguration,
ObjectConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ KmsKey }}' /* required */,
'{{ SourceURI }}',
'{{ ScheduleConfig }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ FileConfiguration }}',
'{{ ObjectConfiguration }}',
'{{ region }}'
RETURNING
Arn,
ClientToken,
Description,
FileConfiguration,
Id,
KmsKey,
Name,
ObjectConfiguration,
ScheduleConfiguration,
SourceURI,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_integrations resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: KmsKey
      value: "{{ KmsKey }}"
    - name: SourceURI
      value: "{{ SourceURI }}"
    - name: ScheduleConfig
      description: |
        The name of the data and how often it should be pulled from the source.
      value:
        FirstExecutionFrom: "{{ FirstExecutionFrom }}"
        Object: "{{ Object }}"
        ScheduleExpression: "{{ ScheduleExpression }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: FileConfiguration
      description: |
        The configuration for what files should be pulled from the source.
      value:
        Folders:
          - "{{ Folders }}"
        Filters: "{{ Filters }}"
    - name: ObjectConfiguration
      value: "{{ ObjectConfiguration }}"
      description: |
        The configuration for what data should be pulled from the source.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_integration"
    values={[
        { label: 'update_data_integration', value: 'update_data_integration' }
    ]}
>
<TabItem value="update_data_integration">

Updates the description of a DataIntegration. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
UPDATE aws.appintegrations.data_integrations
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_integration"
    values={[
        { label: 'delete_data_integration', value: 'delete_data_integration' }
    ]}
>
<TabItem value="delete_data_integration">

Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the CreateDataIntegration API.

```sql
DELETE FROM aws.appintegrations.data_integrations
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
