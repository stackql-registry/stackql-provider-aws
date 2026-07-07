--- 
title: data_accessors
hide_title: false
hide_table_of_contents: false
keywords:
  - data_accessors
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>data_accessors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_accessors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.data_accessors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_accessor"
    values={[
        { label: 'get_data_accessor', value: 'get_data_accessor' },
        { label: 'list_data_accessors', value: 'list_data_accessors' }
    ]}
>
<TabItem value="get_data_accessor">

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
    <td><CopyableCode code="actionConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of action configurations specifying the allowed actions and any associated filters.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application associated with this data accessor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticationDetail" /></td>
    <td><code>object</code></td>
    <td>Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data accessor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataAccessorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data accessor. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataAccessorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data accessor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the data accessor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM Identity Center application associated with this data accessor. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;a-zA-Z0-9_/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data accessor was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_accessors">

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
    <td><CopyableCode code="authenticationDetail" /></td>
    <td><code>object</code></td>
    <td>Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data accessor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataAccessorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data accessor. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataAccessorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data accessor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the data accessor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated IAM Identity Center application. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;a-zA-Z0-9_/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data accessor was last updated.</td>
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
    <td><a href="#get_data_accessor"><CopyableCode code="get_data_accessor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-data_accessor_id"><code>data_accessor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated.</td>
</tr>
<tr>
    <td><a href="#list_data_accessors"><CopyableCode code="list_data_accessors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor.</td>
</tr>
<tr>
    <td><a href="#create_data_accessor"><CopyableCode code="create_data_accessor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-actionConfigurations"><code>actionConfigurations</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td></td>
    <td>Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.</td>
</tr>
<tr>
    <td><a href="#update_data_accessor"><CopyableCode code="update_data_accessor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-data_accessor_id"><code>data_accessor_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionConfigurations"><code>actionConfigurations</code></a></td>
    <td></td>
    <td>Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor.</td>
</tr>
<tr>
    <td><a href="#delete_data_accessor"><CopyableCode code="delete_data_accessor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-data_accessor_id"><code>data_accessor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application.</td>
</tr>
<tr id="parameter-data_accessor_id">
    <td><CopyableCode code="data_accessor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data accessor to delete.</td>
</tr>
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
    <td>The token for the next set of results. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_accessor"
    values={[
        { label: 'get_data_accessor', value: 'get_data_accessor' },
        { label: 'list_data_accessors', value: 'list_data_accessors' }
    ]}
>
<TabItem value="get_data_accessor">

Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated.

```sql
SELECT
actionConfigurations,
applicationId,
authenticationDetail,
createdAt,
dataAccessorArn,
dataAccessorId,
displayName,
idcApplicationArn,
principal,
updatedAt
FROM aws.qbusiness.data_accessors
WHERE application_id = '{{ application_id }}' -- required
AND data_accessor_id = '{{ data_accessor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_accessors">

Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor.

```sql
SELECT
authenticationDetail,
createdAt,
dataAccessorArn,
dataAccessorId,
displayName,
idcApplicationArn,
principal,
updatedAt
FROM aws.qbusiness.data_accessors
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_accessor"
    values={[
        { label: 'create_data_accessor', value: 'create_data_accessor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_accessor">

Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.

```sql
INSERT INTO aws.qbusiness.data_accessors (
principal,
actionConfigurations,
clientToken,
displayName,
authenticationDetail,
tags,
application_id,
region
)
SELECT 
'{{ principal }}' /* required */,
'{{ actionConfigurations }}' /* required */,
'{{ clientToken }}',
'{{ displayName }}' /* required */,
'{{ authenticationDetail }}',
'{{ tags }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
dataAccessorArn,
dataAccessorId,
idcApplicationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_accessors
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the data_accessors resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_accessors resource.
    - name: principal
      value: "{{ principal }}"
    - name: actionConfigurations
      value:
        - action: "{{ action }}"
          filterConfiguration:
            documentAttributeFilter:
              andAllFilters:
                - andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter:
                    andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter: "{{ notFilter }}"
                    equalsTo: "{{ equalsTo }}"
                    containsAll: "{{ containsAll }}"
                    containsAny: "{{ containsAny }}"
                    greaterThan: "{{ greaterThan }}"
                    greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                    lessThan: "{{ lessThan }}"
                    lessThanOrEquals: "{{ lessThanOrEquals }}"
                  equalsTo:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAll:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAny:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
              orAllFilters:
                - andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter:
                    andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter: "{{ notFilter }}"
                    equalsTo: "{{ equalsTo }}"
                    containsAll: "{{ containsAll }}"
                    containsAny: "{{ containsAny }}"
                    greaterThan: "{{ greaterThan }}"
                    greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                    lessThan: "{{ lessThan }}"
                    lessThanOrEquals: "{{ lessThanOrEquals }}"
                  equalsTo:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAll:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAny:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
              notFilter:
                andAllFilters:
                  - andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter:
                      andAllFilters: "{{ andAllFilters }}"
                      orAllFilters: "{{ orAllFilters }}"
                      notFilter: "{{ notFilter }}"
                      equalsTo: "{{ equalsTo }}"
                      containsAll: "{{ containsAll }}"
                      containsAny: "{{ containsAny }}"
                      greaterThan: "{{ greaterThan }}"
                      greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                      lessThan: "{{ lessThan }}"
                      lessThanOrEquals: "{{ lessThanOrEquals }}"
                    equalsTo:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAll:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAny:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                orAllFilters:
                  - andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter:
                      andAllFilters: "{{ andAllFilters }}"
                      orAllFilters: "{{ orAllFilters }}"
                      notFilter: "{{ notFilter }}"
                      equalsTo: "{{ equalsTo }}"
                      containsAll: "{{ containsAll }}"
                      containsAny: "{{ containsAny }}"
                      greaterThan: "{{ greaterThan }}"
                      greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                      lessThan: "{{ lessThan }}"
                      lessThanOrEquals: "{{ lessThanOrEquals }}"
                    equalsTo:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAll:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAny:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                notFilter:
                  andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter: "{{ notFilter }}"
                  equalsTo: "{{ equalsTo }}"
                  containsAll: "{{ containsAll }}"
                  containsAny: "{{ containsAny }}"
                  greaterThan: "{{ greaterThan }}"
                  greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                  lessThan: "{{ lessThan }}"
                  lessThanOrEquals: "{{ lessThanOrEquals }}"
                equalsTo:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAll:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAny:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
              equalsTo:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              containsAll:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              containsAny:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              greaterThan:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              greaterThanOrEquals:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              lessThan:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
              lessThanOrEquals:
                name: "{{ name }}"
                value:
                  stringValue: "{{ stringValue }}"
                  stringListValue: "{{ stringListValue }}"
                  longValue: {{ longValue }}
                  dateValue: "{{ dateValue }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: authenticationDetail
      description: |
        Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor.
      value:
        authenticationType: "{{ authenticationType }}"
        authenticationConfiguration:
          idcTrustedTokenIssuerConfiguration:
            idcTrustedTokenIssuerArn: "{{ idcTrustedTokenIssuerArn }}"
        externalIds:
          - "{{ externalIds }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_accessor"
    values={[
        { label: 'update_data_accessor', value: 'update_data_accessor' }
    ]}
>
<TabItem value="update_data_accessor">

Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor.

```sql
UPDATE aws.qbusiness.data_accessors
SET 
actionConfigurations = '{{ actionConfigurations }}',
authenticationDetail = '{{ authenticationDetail }}',
displayName = '{{ displayName }}'
WHERE 
application_id = '{{ application_id }}' --required
AND data_accessor_id = '{{ data_accessor_id }}' --required
AND region = '{{ region }}' --required
AND actionConfigurations = '{{ actionConfigurations }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_accessor"
    values={[
        { label: 'delete_data_accessor', value: 'delete_data_accessor' }
    ]}
>
<TabItem value="delete_data_accessor">

Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked.

```sql
DELETE FROM aws.qbusiness.data_accessors
WHERE application_id = '{{ application_id }}' --required
AND data_accessor_id = '{{ data_accessor_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
