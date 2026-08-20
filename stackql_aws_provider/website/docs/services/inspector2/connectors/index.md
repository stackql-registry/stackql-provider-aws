--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

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
    <td>The name of the connector. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_install_vm_scanner" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the VM scanner is automatically installed on connected resources.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_config_connector_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services Config connector associated with this connector. (pattern: &lt;code&gt;arn:(&#91;^:&#93;+):config:(&#91;^:&#93;+):(&#91;^:&#93;+):connector/(&#91;^/&#93;+)/(&#91;^/&#93;+)/(&#91;^/:\s&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="azure_regions" /></td>
    <td><code>array</code></td>
    <td>The Azure regions configured for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:inspector2:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:connector/(&#91;a-f0-9-&#93;+|aws-service-connector/.+/&#91;a-f0-9-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the connector. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enablement_status" /></td>
    <td><code>string</code></td>
    <td>The enablement status of the connector, which indicates whether the connector is active and scanning resources. (ENABLED, PENDING_ENABLEMENT, FAILED_TO_ENABLE, PENDING_UPDATE, FAILED_TO_UPDATE, PENDING_DELETION, DELETED, FAILED_TO_DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="enablement_status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current enablement status of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>The health of the connector, which indicates whether Amazon Inspector can reach and scan the connected resources.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The cloud provider for the connector. (AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_configuration" /></td>
    <td><code>object</code></td>
    <td>The Azure scope configuration for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the connector was last updated.</td>
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
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists connectors in your account. Results are paginated. Use the nextToken parameter to retrieve the next page of results.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-providerDetail"><code>providerDetail</code></a></td>
    <td></td>
    <td>Creates a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.</td>
</tr>
<tr>
    <td><a href="#update_connector"><CopyableCode code="update_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectorArn"><code>connectorArn</code></a></td>
    <td></td>
    <td>Updates the description or provider-specific configuration details of an existing connector.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connector from your account.</td>
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
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

Lists connectors in your account. Results are paginated. Use the nextToken parameter to retrieve the next page of results.

```sql
SELECT
name,
auto_install_vm_scanner,
aws_config_connector_arn,
azure_regions,
connector_arn,
created_at,
description,
enablement_status,
enablement_status_reason,
health,
provider,
scope_configuration,
tags,
updated_at
FROM aws.inspector2.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Creates a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.

```sql
INSERT INTO aws.inspector2.connectors (
clientToken,
name,
provider,
description,
providerDetail,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ provider }}' /* required */,
'{{ description }}',
'{{ providerDetail }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
connector_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: provider
      value: "{{ provider }}"
      valid_values: ['AZURE']
    - name: description
      value: "{{ description }}"
    - name: providerDetail
      description: |
        The provider-specific configuration details for creating a connector.
      value:
        azure:
          awsConfigConnectorArn: "{{ awsConfigConnectorArn }}"
          scopeConfiguration:
            vmScanning:
              scopeType: "{{ scopeType }}"
              scopeValues:
                - "{{ scopeValues }}"
            containerImageScanning:
              scopeType: "{{ scopeType }}"
              scopeValues:
                - "{{ scopeValues }}"
            serverlessScanning:
              scopeType: "{{ scopeType }}"
              scopeValues:
                - "{{ scopeValues }}"
          azureRegions:
            - "{{ azureRegions }}"
          autoInstallVMScanner: {{ autoInstallVMScanner }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector"
    values={[
        { label: 'update_connector', value: 'update_connector' }
    ]}
>
<TabItem value="update_connector">

Updates the description or provider-specific configuration details of an existing connector.

```sql
UPDATE aws.inspector2.connectors
SET 
connectorArn = '{{ connectorArn }}',
description = '{{ description }}',
providerDetail = '{{ providerDetail }}'
WHERE 
region = '{{ region }}' --required
AND connectorArn = '{{ connectorArn }}' --required
RETURNING
connector_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes a connector from your account.

```sql
DELETE FROM aws.inspector2.connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
