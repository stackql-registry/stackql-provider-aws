--- 
title: code_security_scan_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_scan_configurations
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>code_security_scan_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_security_scan_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.code_security_scan_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_security_scan_configuration"
    values={[
        { label: 'get_code_security_scan_configuration', value: 'get_code_security_scan_configuration' },
        { label: 'list_code_security_scan_configurations', value: 'list_code_security_scan_configurations' }
    ]}
>
<TabItem value="get_code_security_scan_configuration">

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
    <td>The name of the scan configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration settings for code security scans.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the scan configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the scan configuration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The security level for the scan configuration. (ORGANIZATION, ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="scanConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>arn:aws:inspector2:::owner//codesecurity-configuration/ (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:owner/(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;)/codesecurity-configuration/&#91;a-f0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scopeSettings" /></td>
    <td><code>object</code></td>
    <td>Defines the scope of repositories to be included in code security scans.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the scan configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_security_scan_configurations">

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
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>A list of code security scan configuration summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
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
    <td><a href="#get_code_security_scan_configuration"><CopyableCode code="get_code_security_scan_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a code security scan configuration.</td>
</tr>
<tr>
    <td><a href="#list_code_security_scan_configurations"><CopyableCode code="list_code_security_scan_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all code security scan configurations in your account.</td>
</tr>
<tr>
    <td><a href="#create_code_security_scan_configuration"><CopyableCode code="create_code_security_scan_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-level"><code>level</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Creates a scan configuration for code security scanning.</td>
</tr>
<tr>
    <td><a href="#update_code_security_scan_configuration"><CopyableCode code="update_code_security_scan_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scanConfigurationArn"><code>scanConfigurationArn</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Updates an existing code security scan configuration.</td>
</tr>
<tr>
    <td><a href="#delete_code_security_scan_configuration"><CopyableCode code="delete_code_security_scan_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a code security scan configuration.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_security_scan_configuration"
    values={[
        { label: 'get_code_security_scan_configuration', value: 'get_code_security_scan_configuration' },
        { label: 'list_code_security_scan_configurations', value: 'list_code_security_scan_configurations' }
    ]}
>
<TabItem value="get_code_security_scan_configuration">

Retrieves information about a code security scan configuration.

```sql
SELECT
name,
configuration,
createdAt,
lastUpdatedAt,
level,
scanConfigurationArn,
scopeSettings,
tags
FROM aws.inspector2.code_security_scan_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_security_scan_configurations">

Lists all code security scan configurations in your account.

```sql
SELECT
configurations,
nextToken
FROM aws.inspector2.code_security_scan_configurations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_security_scan_configuration"
    values={[
        { label: 'create_code_security_scan_configuration', value: 'create_code_security_scan_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_security_scan_configuration">

Creates a scan configuration for code security scanning.

```sql
INSERT INTO aws.inspector2.code_security_scan_configurations (
name,
level,
configuration,
scopeSettings,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ level }}' /* required */,
'{{ configuration }}' /* required */,
'{{ scopeSettings }}',
'{{ tags }}',
'{{ region }}'
RETURNING
scanConfigurationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_security_scan_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_security_scan_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: level
      value: "{{ level }}"
      valid_values: ['ORGANIZATION', 'ACCOUNT']
    - name: configuration
      description: |
        Contains the configuration settings for code security scans.
      value:
        periodicScanConfiguration:
          frequency: "{{ frequency }}"
          frequencyExpression: "{{ frequencyExpression }}"
        continuousIntegrationScanConfiguration:
          supportedEvents:
            - "{{ supportedEvents }}"
        ruleSetCategories:
          - "{{ ruleSetCategories }}"
    - name: scopeSettings
      description: |
        Defines the scope of repositories to be included in code security scans.
      value:
        projectSelectionScope: "{{ projectSelectionScope }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_code_security_scan_configuration"
    values={[
        { label: 'update_code_security_scan_configuration', value: 'update_code_security_scan_configuration' }
    ]}
>
<TabItem value="update_code_security_scan_configuration">

Updates an existing code security scan configuration.

```sql
UPDATE aws.inspector2.code_security_scan_configurations
SET 
scanConfigurationArn = '{{ scanConfigurationArn }}',
configuration = '{{ configuration }}'
WHERE 
region = '{{ region }}' --required
AND scanConfigurationArn = '{{ scanConfigurationArn }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
scanConfigurationArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_code_security_scan_configuration"
    values={[
        { label: 'delete_code_security_scan_configuration', value: 'delete_code_security_scan_configuration' }
    ]}
>
<TabItem value="delete_code_security_scan_configuration">

Deletes a code security scan configuration.

```sql
DELETE FROM aws.inspector2.code_security_scan_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
